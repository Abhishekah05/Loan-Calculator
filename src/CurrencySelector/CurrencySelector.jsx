import React from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
  Paper,
  useTheme,
  Typography
} from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EuroIcon from '@mui/icons-material/Euro';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useLoanContext } from '../Context/Context';

const getCurrencyIcon = (currencyCode) => {
  switch (currencyCode) {
    case 'USD': return <AttachMoneyIcon sx={{ fontSize: '1.1rem' }} />;
    case 'EUR': return <EuroIcon sx={{ fontSize: '1.1rem' }} />;
    case 'GBP': return <CurrencyPoundIcon sx={{ fontSize: '1.1rem' }} />;
    case 'INR': return <CurrencyRupeeIcon sx={{ fontSize: '1.1rem' }} />;
    default:  return <AttachMoneyIcon sx={{ fontSize: '1.1rem' }} />;
  }
};

const CurrencySelector = () => {
  const { currency, setCurrency, amortizationSchedule, resetTable } = useLoanContext();
  const theme = useTheme();

  return (
    <Container maxWidth="sm" sx={{ py: 1 }}>
      <Paper
        elevation={2}
        sx={{
          p: 1.5,
          mt: 1,
          bgcolor: theme.palette.background.paper,
          maxWidth: 500,
          mx: 'auto'
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          minHeight: 'auto'
        }}>
          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel id="currency-label" sx={{ fontSize: '0.9rem' }}>
              Currency
            </InputLabel>
            <Select
              labelId="currency-label"
              value={currency}
              label="Currency"
              onChange={(e) => setCurrency(e.target.value)}
              size="small"
              sx={{
                height: 40,
                '& .MuiSelect-select': {
                  py: 1,
                  display: 'flex',
                  alignItems: 'center'
                }
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    maxHeight: 200,
                    '& .MuiMenuItem-root': {
                      minHeight: 36,
                      py: 0.5
                    }
                  }
                }
              }}
              renderValue={(value) => (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {getCurrencyIcon(value)}
                  <Typography sx={{ ml: 1, fontSize: '0.9rem' }}>{value}</Typography>
                </Box>
              )}
            >
              {['USD','EUR','GBP','INR'].map((code) => (
                <MenuItem key={code} value={code} sx={{ py: 0.5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {getCurrencyIcon(code)}
                    <Typography sx={{ ml: 1, fontSize: '0.9rem' }}>{code}</Typography>
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {amortizationSchedule.length > 0 && (
            <Button
              variant="outlined"
              color="secondary"
              onClick={resetTable}
              size="small"
              sx={{ 
                textTransform: 'uppercase',
                fontSize: '0.8rem',
                py: 0.5,
                px: 1.5,
                height: 40
              }}
              startIcon={<RestartAltIcon sx={{ fontSize: '1rem' }} />}
            >
              Reset Table
            </Button>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default CurrencySelector;