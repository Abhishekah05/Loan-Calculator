import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  TextField,
  Box,
  CircularProgress,
  IconButton,
  useTheme
} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ExchangeRatesTable = () => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [baseRate, setBaseRate] = useState('USD');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'currency', direction: 'asc' });

  const itemsPerPage = 10;
  const apiKey = '608d10bb5ee0dbe93dafd102';
  const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseRate}`;
  const theme = useTheme();

  useEffect(() => {
    fetchRates();
  }, [baseRate]);

  const fetchRates = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.result === 'success') {
        setRates(data.conversion_rates);
        setError(null);
      } else {
        setError(`API Error: ${data.error_type}`);
      }
    } catch (err) {
      setError(`Fetch Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const currenciesList = Object.keys(rates).map((currency) => ({
    currency,
    rate: rates[currency]
  }));

  const filteredCurrencies = currenciesList.filter((item) =>
    item.currency.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedCurrencies = [...filteredCurrencies].sort((a, b) => {
    const key = sortConfig.key;
    if (key === 'currency') {
      return sortConfig.direction === 'asc'
        ? a.currency.localeCompare(b.currency)
        : b.currency.localeCompare(a.currency);
    } else {
      return sortConfig.direction === 'asc' ? a.rate - b.rate : b.rate - a.rate;
    }
  });

  const totalPages = Math.ceil(sortedCurrencies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCurrencies = sortedCurrencies.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3, bgcolor: theme.palette.background.paper }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6">Live Exchange Rates</Typography>

          <Box display="flex" alignItems="center" gap={2}>
            <Typography variant="body2">Base Currency:</Typography>
            <Select
              value={baseRate}
              onChange={(e) => setBaseRate(e.target.value)}
              size="small"
            >
              {Object.keys(rates).map((currency) => (
                <MenuItem key={currency} value={currency}>{currency}</MenuItem>
              ))}
            </Select>
            <IconButton onClick={fetchRates} color="primary">
              <RefreshIcon />
            </IconButton>
          </Box>
        </Box>

        <Box mb={2} display="flex" alignItems="center">
          <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />
          <TextField
            placeholder="Search currencies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            variant="outlined"
            size="small"
            fullWidth
          />
        </Box>

        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height={200}>
            <CircularProgress color="primary" />
          </Box>
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          <TableContainer>
            <Table size="small" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell
                    onClick={() =>
                      setSortConfig((prev) => ({
                        key: 'currency',
                        direction: prev.direction === 'asc' ? 'desc' : 'asc'
                      }))
                    }
                    sx={{ cursor: 'pointer', fontWeight: 'bold' }}
                  >
                    Currency {sortConfig.key === 'currency' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
                  </TableCell>
                  <TableCell
                    onClick={() =>
                      setSortConfig((prev) => ({
                        key: 'rate',
                        direction: prev.direction === 'asc' ? 'desc' : 'asc'
                      }))
                    }
                    sx={{ cursor: 'pointer', fontWeight: 'bold' }}
                    align="right"
                  >
                    Rate (1 {baseRate} =) {sortConfig.key === 'rate' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedCurrencies.map((item, index) => (
                  <TableRow key={item.currency}>
                    <TableCell>{item.currency}</TableCell>
                    <TableCell align="right">{item.rate.toFixed(6)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {/* Pagination */}
        <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2">
            Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, sortedCurrencies.length)} of {sortedCurrencies.length}
          </Typography>
          <Box display="flex" alignItems="center" gap={1}>
            <IconButton
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>
            <Typography variant="body2">{currentPage} / {totalPages || 1}</Typography>
            <IconButton
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages || totalPages === 0}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default ExchangeRatesTable;
