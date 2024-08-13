// import * as React from 'react';
// import PropTypes from 'prop-types';
// import {
//   Box,
//   Typography,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Grid,
//   CssBaseline, // Ensure CssBaseline is imported
// } from '@mui/material';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts';
// import Header from '../Header';


// const drawerWidth = 240;

// const data = [
//   { name: 'AUG-1', sales: 12000 },
//   { name: 'AUG-2', sales: 30000 },
//   { name: 'AUG-3', sales: 10000 },
//   { name: 'AUG-4', sales: 15000 },
//   { name: 'AUG-5', sales: 20000 },
//   { name: 'AUG-6', sales: 24000 },
//   { name: 'AUG-7', sales: 22000 },
//   { name: 'AUG-8', sales: 21000 },
//   { name: 'AUG-9', sales: 20000 },
// ];

// const recentOrders = [
//   { date: '16 Mar, 2019', name: 'Elvis Presley', shipTo: 'Tupelo, MS', paymentMethod: 'VISA •••• 3719', saleAmount: 312.44 },
//   { date: '16 Mar, 2019', name: 'Paul McCartney', shipTo: 'London, UK', paymentMethod: 'VISA •••• 2574', saleAmount: 866.99 },
//   { date: '16 Mar, 2019', name: 'Tom Scholz', shipTo: 'Boston, MA', paymentMethod: 'MC •••• 1253', saleAmount: 100.81 },
//   { date: '16 Mar, 2019', name: 'Michael Jackson', shipTo: 'Gary, IN', paymentMethod: 'AMEX •••• 2000', saleAmount: 654.39 },
//   { date: '15 Mar, 2019', name: 'Bruce Springsteen', shipTo: 'Long Branch, NJ', paymentMethod: 'VISA •••• 5912', saleAmount: 212.79 },
// ];

// function DashboardContent({ mode, toggleColorMode }) {
//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflow: 'hidden' }}>
//       <CssBaseline />
//       <Header />
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           p: 3,
//           mt: 8, // Adjust this margin to match the height of your Header
//           width: '100%',
//           maxWidth: 1200,
//           margin: '0 auto', // Center the content horizontally
//         }}
//       >
        
//         <Typography variant="h3" gutterBottom>
//           Dashboard
//         </Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={8} lg={9}>
//             <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 340, transition: '0.3s',
//               '&:hover': {
//                 boxShadow: 6,
//               }, }}>
//               <Typography variant="h4" gutterBottom>
//                 Booking Graph
//               </Typography>
//               <ResponsiveContainer>
//                 <LineChart
//                   data={data}
//                   margin={{
//                     top: 16,
//                     right: 16,
//                     bottom: 0,
//                     left: 24,
//                   }}
//                 >
//                   <XAxis dataKey="name" />
//                   <YAxis>
//                     <Label angle={270} position="left" style={{ textAnchor: 'middle' }}>
//                       Sales (₹)
//                     </Label>
//                   </YAxis>
//                   <Tooltip />
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
//                 </LineChart>
//               </ResponsiveContainer>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} md={4} lg={3}>
//             <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 340, transition: '0.3s',
//               '&:hover': {
//                 boxShadow: 6,
//               }, }}>
//               <Typography variant="h3" gutterBottom>
//                 Booking Sales
//               </Typography>
//               <Typography component="p" variant="h4">
//                 $3,024.00
//               </Typography>
//               <Typography variant="h5" color="text.secondary" sx={{ flex: 1 }}>
//                 on 15 March, 2019
//               </Typography>
//             </Paper>
//           </Grid>
//           <Grid item xs={12}>
//             <Paper
//               sx={{
//                 p: 2,
//                 transition: '0.3s',
//                 '&:hover': {
//                   boxShadow: 6,
//                 },
//               }}
//             >
//               <Typography variant="h4" gutterBottom>
//                 Recent Orders
//               </Typography>
//               <TableContainer>
//                 <Table>
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>Date</TableCell>
//                       <TableCell>Name</TableCell>
//                       <TableCell>Location</TableCell>
//                       <TableCell>Payment Method</TableCell>
//                       <TableCell align="right">Sale Amount</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {recentOrders.map((order) => (
//                       <TableRow key={order.date + order.name}>
//                         <TableCell>{order.date}</TableCell>
//                         <TableCell>{order.name}</TableCell>
//                         <TableCell>{order.shipTo}</TableCell>
//                         <TableCell>{order.paymentMethod}</TableCell>
//                         <TableCell align="right">{order.saleAmount}</TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//             </Paper>
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// }

// DashboardContent.propTypes = {
//   mode: PropTypes.oneOf(['dark', 'light']).isRequired,
//   toggleColorMode: PropTypes.func.isRequired,
// };

// export default function Dashboard({ mode, toggleColorMode }) {
//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//       <CssBaseline />
//       <DashboardContent mode={mode} toggleColorMode={toggleColorMode} />
//     </Box>
//   );
// }

// Dashboard.propTypes = {
//   mode: PropTypes.oneOf(['dark', 'light']).isRequired,
//   toggleColorMode: PropTypes.func.isRequired,
// };
import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
  CssBaseline,
} from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts';
import Sidebar from '../Sidebar';
import Header from '../Header';

const drawerWidth = 240;

const data = [
  { name: 'AUG-1', sales: 12000 },
  { name: 'AUG-2', sales: 30000 },
  { name: 'AUG-3', sales: 10000 },
  { name: 'AUG-4', sales: 15000 },
  { name: 'AUG-5', sales: 20000 },
  { name: 'AUG-6', sales: 24000 },
  { name: 'AUG-7', sales: 22000 },
  { name: 'AUG-8', sales: 21000 },
  { name: 'AUG-9', sales: 20000 },
];

const recentOrders = [
  { date: '16 Mar, 2019', name: 'Elvis Presley', shipTo: 'Tupelo, MS', paymentMethod: 'VISA •••• 3719', saleAmount: 312.44 },
  { date: '16 Mar, 2019', name: 'Paul McCartney', shipTo: 'London, UK', paymentMethod: 'VISA •••• 2574', saleAmount: 866.99 },
  { date: '16 Mar, 2019', name: 'Tom Scholz', shipTo: 'Boston, MA', paymentMethod: 'MC •••• 1253', saleAmount: 100.81 },
  { date: '16 Mar, 2019', name: 'Michael Jackson', shipTo: 'Gary, IN', paymentMethod: 'AMEX •••• 2000', saleAmount: 654.39 },
  { date: '15 Mar, 2019', name: 'Bruce Springsteen', shipTo: 'Long Branch, NJ', paymentMethod: 'VISA •••• 5912', saleAmount: 212.79 },
];

function DashboardContent({ mode, toggleColorMode }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflow: 'hidden', fontFamily: '"Quicksand", "Helvetica Neue", Arial, sans-serif' }}>
      <CssBaseline />
      <Header />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar sx={{ width: drawerWidth }} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            ml: drawerWidth, // Adjust this value to match the width of your Sidebar
            mt: 7, // Adjust this margin to match the height of your Header
            maxWidth: 1000,
            margin: '0 auto', // Center the content horizontally
          }}
        >
          <Typography variant="h4" gutterBottom>
            Dashboard
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 280, transition: '0.3s',
                '&:hover': {
                  boxShadow: 6,
                }, }}>
                <Typography variant="h5" gutterBottom>
                  Booking Graph
                </Typography>
                <ResponsiveContainer>
                  <LineChart
                    data={data}
                    margin={{
                      top: 16,
                      right: 16,
                      bottom: 0,
                      left: 24,
                    }}
                  >
                    <XAxis dataKey="name" />
                    <YAxis>
                      <Label angle={270} position="left" style={{ textAnchor: 'middle' }}>
                        Sales (₹)
                      </Label>
                    </YAxis>
                    <Tooltip />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 280, transition: '0.3s',
                '&:hover': {
                  boxShadow: 6,
                }, }}>
                <Typography variant="h5" gutterBottom>
                  Booking Sales
                </Typography>
                <Typography component="p" variant="h4">
                  $3,024.00
                </Typography>
                <Typography variant="h5" color="text.secondary" sx={{ flex: 1 }}>
                  on 13 August, 2024
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper
                sx={{
                  p: 2,
                  transition: '0.3s',
                  '&:hover': {
                    boxShadow: 6,
                  },
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Recent Orders
                </Typography>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Payment Method</TableCell>
                        <TableCell align="right">Sale Amount</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {recentOrders.map((order) => (
                        <TableRow key={order.date + order.name}>
                          <TableCell>{order.date}</TableCell>
                          <TableCell>{order.name}</TableCell>
                          <TableCell>{order.shipTo}</TableCell>
                          <TableCell>{order.paymentMethod}</TableCell>
                          <TableCell align="right">{order.saleAmount}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

DashboardContent.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default function Dashboard({ mode, toggleColorMode }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: '"Quicksand", "Helvetica Neue", Arial, sans-serif' }}>
      <CssBaseline />
      <DashboardContent mode={mode} toggleColorMode={toggleColorMode} />
    </Box>
  );
}

Dashboard.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};
