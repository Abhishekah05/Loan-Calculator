// src/components/AmortizationTable.jsx
import React from 'react';
import { 
  Paper, 
  Typography, 
  TableContainer, 
  Table, 
  TableHead, 
  TableBody, 
  TableRow, 
  TableCell,
  Container,
  Box,
  useTheme
} from '@mui/material';
import TableChartIcon from '@mui/icons-material/TableChart';
import { useLoanContext } from '../Context/Context';

const AmortizationTable = () => {
  const { amortizationSchedule, currency, formatCurrency } = useLoanContext();
  const theme = useTheme();
  
  if (amortizationSchedule.length === 0) {
    return null;
  }
  
  return (
    <Container maxWidth="lg">
      <Paper 
        sx={{ 
          width: '100%', 
          overflow: 'hidden', 
          mt: 2,
          bgcolor: theme.palette.background.paper,
          boxShadow: theme.shadows[3]
        }}
      >
        <Box sx={{ 
          p: 2, 
          borderBottom: 1, 
          borderColor: theme.palette.divider,
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}>
          <TableChartIcon color="primary" />
          <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
            Amortization Schedule ({currency})
          </Typography>
        </Box>
        
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="amortization schedule table">
            <TableHead>
              <TableRow>
                <TableCell 
                  sx={{ 
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[100],
                    fontWeight: 'bold'
                  }}
                >
                  Month
                </TableCell>
                <TableCell 
                  align="right"
                  sx={{ 
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[100],
                    fontWeight: 'bold'
                  }}
                >
                  Principal
                </TableCell>
                <TableCell 
                  align="right"
                  sx={{ 
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[100],
                    fontWeight: 'bold'
                  }}
                >
                  Interest
                </TableCell>
                <TableCell 
                  align="right"
                  sx={{ 
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[100],
                    fontWeight: 'bold'
                  }}
                >
                  Remaining Balance
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {amortizationSchedule.slice(0, 60).map((row) => (
                <TableRow 
                  key={row.month}
                  sx={{ 
                    '&:nth-of-type(odd)': {
                      bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)'
                    },
                    '&:hover': {
                      bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.04)'
                    }
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row.month}
                  </TableCell>
                  <TableCell align="right">{formatCurrency(row.principal)} {currency}</TableCell>
                  <TableCell align="right">{formatCurrency(row.interest)} {currency}</TableCell>
                  <TableCell align="right">{formatCurrency(row.balance)} {currency}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default AmortizationTable;