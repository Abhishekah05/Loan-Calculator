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
          mb: 4, // Added margin bottom for space from page bottom
          bgcolor: theme.palette.background.paper,
          boxShadow: theme.shadows[3]
        }}
      >
        <Box sx={{ 
          p: 1, 
          borderBottom: 1, 
          borderColor: theme.palette.divider,
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}>
          <TableChartIcon color="primary" fontSize="small" />
          <Typography variant="h6" sx={{ fontWeight: 'medium', fontSize: '1.1rem' }}>
            Amortization Schedule ({currency})
          </Typography>
        </Box>
        
        <TableContainer sx={{ maxHeight: 400 }}>
          <Table stickyHeader aria-label="amortization schedule table" size="small">
            <TableHead>
              <TableRow>
                <TableCell 
                  sx={{ 
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[100],
                    fontWeight: 'bold',
                    fontSize: '0.8rem', // Reduced header font size
                    py: 1, // Reduced vertical padding
                    px: 1.5 // Reduced horizontal padding
                  }}
                >
                  Month
                </TableCell>
                <TableCell 
                  align="right"
                  sx={{ 
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[100],
                    fontWeight: 'bold',
                    fontSize: '0.8rem',
                    py: 1,
                    px: 1.5
                  }}
                >
                  Principal
                </TableCell>
                <TableCell 
                  align="right"
                  sx={{ 
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[100],
                    fontWeight: 'bold',
                    fontSize: '0.8rem',
                    py: 1,
                    px: 1.5
                  }}
                >
                  Interest
                </TableCell>
                <TableCell 
                  align="right"
                  sx={{ 
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[100],
                    fontWeight: 'bold',
                    fontSize: '0.8rem',
                    py: 1,
                    px: 1.5
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
                  <TableCell 
                    component="th" 
                    scope="row"
                    sx={{ 
                      fontSize: '0.85rem', // Reduced cell font size
                      py: 0.75, // Reduced vertical padding
                      px: 1.5 // Reduced horizontal padding
                    }}
                  >
                    {row.month}
                  </TableCell>
                  <TableCell 
                    align="right"
                    sx={{ 
                      fontSize: '0.85rem',
                      py: 0.75,
                      px: 1.5
                    }}
                  >
                    {formatCurrency(row.principal)} {currency}
                  </TableCell>
                  <TableCell 
                    align="right"
                    sx={{ 
                      fontSize: '0.85rem',
                      py: 0.75,
                      px: 1.5
                    }}
                  >
                    {formatCurrency(row.interest)} {currency}
                  </TableCell>
                  <TableCell 
                    align="right"
                    sx={{ 
                      fontSize: '0.85rem',
                      py: 0.75,
                      px: 1.5
                    }}
                  >
                    {formatCurrency(row.balance)} {currency}
                  </TableCell>
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