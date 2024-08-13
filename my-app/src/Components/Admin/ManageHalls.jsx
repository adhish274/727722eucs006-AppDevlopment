
// import React, { useState, useEffect } from 'react';
// import { TextField, Button, Box, Paper, Typography, CssBaseline, Grid } from '@mui/material';
// import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
// import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
// import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
// import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined'; // Import the outlined ImageIcon
// import Header from './Header';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Simplefoot from './simplefoot/Simplefoot';

// const theme = createTheme({
//   typography: {
//     fontFamily: '"Quicksand", "Helvetica Neue", Arial, sans-serif',
//   },
// });

// const ManageHall = () => {
//   const [halls, setHalls] = useState([]);
//   const [selectedHall, setSelectedHall] = useState(null);

//   const handleSave = (hall) => {
//     if (selectedHall) {
//       setHalls(halls.map((h) => (h.id === hall.id ? hall : h)));
//       setSelectedHall(null);
//     } else {
//       hall.id = Date.now();
//       setHalls([...halls, hall]);
//     }
//   };

//   const handleEdit = (hall) => {
//     setSelectedHall(hall);
//   };

//   const handleDelete = (id) => {
//     setHalls(halls.filter((hall) => hall.id !== id));
//   };

//   const handleCancel = () => {
//     setSelectedHall(null);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Header />
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', bgcolor: 'background.default' }}>
//         <CssBaseline />
//         <Box component="main" sx={{ width: '100%', maxWidth: 500, p: 3 }}>
//           <Typography variant="h3" gutterBottom align="center">
//             Manage Halls
//           </Typography>
//           {/* Pass the props to HallForm */}
//           <HallForm selectedHall={selectedHall} onSave={handleSave} onCancel={handleCancel} />
//           <Grid container spacing={3} sx={{ mt: 3 }}>
//             {halls.map((hall) => (
//               <Grid item xs={12} key={hall.id}>
//                 <Paper sx={{ p: 2, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
//                   <Typography variant="h6" align="center">
//                     <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
//                       <AccountBalanceOutlinedIcon /> {hall.name}
//                     </Box>
//                   </Typography>
//                   <img src={hall.image || 'https://via.placeholder.com/150'} alt={hall.name} style={{ width: '100%', height: 'auto' }} />
//                   <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                       <LocationOnOutlinedIcon /> <Typography sx={{ fontWeight: 'bold' }}>Location:</Typography> <Typography>{hall.location}</Typography>
//                     </Box>
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                       <InfoOutlinedIcon /> <Typography sx={{ fontWeight: 'bold' }}>Amenities:</Typography> <Typography>{hall.amenities}</Typography>
//                     </Box>
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                       <StarOutlinedIcon /> <Typography sx={{ fontWeight: 'bold' }}>Rating:</Typography> <Typography>{hall.rating}</Typography>
//                     </Box>
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                       <CurrencyRupeeOutlinedIcon /> <Typography sx={{ fontWeight: 'bold' }}>Pricing:</Typography> <Typography>{hall.pricing}</Typography>
//                     </Box>
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                       <GroupOutlinedIcon /> <Typography sx={{ fontWeight: 'bold' }}>Accommodation:</Typography> <Typography>{hall.accommodation}</Typography>
//                     </Box>
//                   </Box>
//                   <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
//                     <Button variant="outlined" color="secondary" onClick={() => handleEdit(hall)}>
//                       Edit Hall
//                     </Button>
//                     <Button variant="outlined" color="error" onClick={() => handleDelete(hall.id)}>
//                       Delete Hall
//                     </Button>
//                   </Box>
//                 </Paper>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// };

// const HallForm = ({ selectedHall, onSave, onCancel }) => {
//   const [hall, setHall] = useState({
//     name: '',
//     location: '',
//     amenities: '',
//     rating: '',
//     pricing: '',
//     accommodation: '',
//     image: ''
//   });

//   useEffect(() => {
//     if (selectedHall) {
//       setHall(selectedHall);
//     }
//   }, [selectedHall]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setHall({ ...hall, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(hall);
//     setHall({ name: '', location: '', amenities: '', rating: '', pricing: '', accommodation: '', image: '' });
//   };

//   return (
//     <Paper sx={{ padding: 3 }}>
//       <Typography variant="h6" align="center" fontWeight="bold">
//         {selectedHall ? 'Edit Hall' : 'ADD HALLS'}
//       </Typography>
//       <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
//         <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
//           <AccountBalanceOutlinedIcon />
//           <TextField
//             name="name"
//             label="Hall Name"
//             value={hall.name}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             InputLabelProps={{ style: { fontWeight: 'bold' } }}
//           />
//         </Box>
//         <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
//           <LocationOnOutlinedIcon />
//           <TextField
//             name="location"
//             label="Location"
//             value={hall.location}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             InputLabelProps={{ style: { fontWeight: 'bold' } }}
//           />
//         </Box>
//         <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
//           <InfoOutlinedIcon />
//           <TextField
//             name="amenities"
//             label="Amenities"
//             value={hall.amenities}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             InputLabelProps={{ style: { fontWeight: 'bold' } }}
//           />
//         </Box>
//         <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
//           <StarOutlinedIcon />
//           <TextField
//             name="rating"
//             label="Rating"
//             type="number"
//             value={hall.rating}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             InputLabelProps={{ style: { fontWeight: 'bold' } }}
//           />
//         </Box>
//         <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
//           <CurrencyRupeeOutlinedIcon />
//           <TextField
//             name="pricing"
//             label="Pricing"
//             value={hall.pricing}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             InputLabelProps={{ style: { fontWeight: 'bold' } }}
//           />
//         </Box>
//         <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
//           <GroupOutlinedIcon />
//           <TextField
//             name="accommodation"
//             label="Accommodation"
//             type="number"
//             value={hall.accommodation}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             InputLabelProps={{ style: { fontWeight: 'bold' } }}
//           />
//         </Box>
//         <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
//           <ImageOutlinedIcon />  {/* Add the ImageIcon here */}
//           <TextField
//             name="image"
//             label="Image URL"
//             value={hall.image}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             InputLabelProps={{ style: { fontWeight: 'bold' } }}
//           />
//         </Box>
//         <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
//           <Button type="submit" variant="contained" color="primary">
//             {selectedHall ? 'Save Changes' : 'Add Hall'}
//           </Button>
//         </Box>
//         {selectedHall && (
//           <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
//             <Button variant="outlined" color="secondary" onClick={onCancel}>
//               Cancel
//             </Button>
//           </Box>
//         )}
//       </Box>
//     </Paper>
//   );
// };

// export default ManageHall;

// import React, { useState, useEffect } from 'react';
// import { TextField, Button, Box, Paper, Typography, CssBaseline, Grid } from '@mui/material';
// import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
// import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
// import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
// import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Header from '../Header';

// const theme = createTheme({
//   typography: {
//     fontFamily: '"Quicksand", "Helvetica Neue", Arial, sans-serif',
//   },
// });

// const ManageHall = () => {
//   const [halls, setHalls] = useState([]);
//   const [selectedHall, setSelectedHall] = useState(null);

//   useEffect(() => {
//     const storedHalls = JSON.parse(localStorage.getItem('halls')) || [];
//     setHalls(storedHalls);
//   }, []);

//   const handleSave = (hall) => {
//     let updatedHalls;
//     if (selectedHall) {
//       updatedHalls = halls.map((h) => (h.id === hall.id ? hall : h));
//       setSelectedHall(null);
//     } else {
//       hall.id = Date.now();
//       updatedHalls = [...halls, hall];
//     }
//     setHalls(updatedHalls);
//     localStorage.setItem('halls', JSON.stringify(updatedHalls));
//   };

//   const handleEdit = (hall) => {
//     setSelectedHall(hall);
//     document.getElementById('hall-form').scrollIntoView({ behavior: 'smooth' });
//   };

//   const handleDelete = (id) => {
//     const updatedHalls = halls.filter((hall) => hall.id !== id);
//     setHalls(updatedHalls);
//     localStorage.setItem('halls', JSON.stringify(updatedHalls));
//   };

//   const handleCancel = () => {
//     setSelectedHall(null);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Header />
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', bgcolor: 'background.default' }}>
//         <CssBaseline />
//         <Box component="main" sx={{ width: '100%', maxWidth: 1000, p: 3 }}>
//           <Typography variant="h3" gutterBottom align="center">
//             Manage Halls
//           </Typography>
//           <Box id="hall-form">
//             <HallForm selectedHall={selectedHall} onSave={handleSave} onCancel={handleCancel} />
//           </Box>
//           <Grid container spacing={3} sx={{ mt: 3 }}>
//             {halls.map((hall) => (
//               <Grid item xs={12} sm={6} md={4} key={hall.id}>
//                 <Paper sx={{ p: 2, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' }, height: '100%' }}>
//                   <Typography variant="h6" align="center">
//                     <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
//                       <AccountBalanceOutlinedIcon /> {hall.name}
//                     </Box>
//                   </Typography>
//                   <img src={hall.image || 'https://via.placeholder.com/150'} alt={hall.name} style={{ width: '100%', height: 'auto' }} />
//                   <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                       <LocationOnOutlinedIcon /> <Typography sx={{ fontWeight: 'bold' }}>Location:</Typography> <Typography>{hall.location}</Typography>
//                     </Box>
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                       <InfoOutlinedIcon /> <Typography sx={{ fontWeight: 'bold' }}>Amenities:</Typography> <Typography>{hall.amenities}</Typography>
//                     </Box>
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                       <StarOutlinedIcon /> <Typography sx={{ fontWeight: 'bold' }}>Rating:</Typography> <Typography>{hall.rating}</Typography>
//                     </Box>
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                       <CurrencyRupeeOutlinedIcon /> <Typography sx={{ fontWeight: 'bold' }}>Pricing:</Typography> <Typography>{hall.pricing}</Typography>
//                     </Box>
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                       <GroupOutlinedIcon /> <Typography sx={{ fontWeight: 'bold' }}>Accommodation:</Typography> <Typography>{hall.accommodation}</Typography>
//                     </Box>
//                   </Box>
//                   <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
//                     <Button variant="outlined" color="secondary" onClick={() => handleEdit(hall)}>
//                       Edit Hall
//                     </Button>
//                     <Button variant="outlined" color="error" onClick={() => handleDelete(hall.id)}>
//                       Delete Hall
//                     </Button>
//                   </Box>
//                 </Paper>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// };

// const HallForm = ({ selectedHall, onSave, onCancel }) => {
//   const [hall, setHall] = useState({
//     name: '',
//     location: '',
//     amenities: '',
//     rating: '',
//     pricing: '',
//     accommodation: '',
//     image: ''
//   });

//   useEffect(() => {
//     if (selectedHall) {
//       setHall(selectedHall);
//     } else {
//       setHall({
//         name: '',
//         location: '',
//         amenities: '',
//         rating: '',
//         pricing: '',
//         accommodation: '',
//         image: ''
//       });
//     }
//   }, [selectedHall]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setHall({ ...hall, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(hall);
//     setHall({
//       name: '',
//       location: '',
//       amenities: '',
//       rating: '',
//       pricing: '',
//       accommodation: '',
//       image: ''
//     });
//   };

//   return (
//     <Paper sx={{ padding: 3, maxWidth: 500, margin: 'auto' }}>
//       <Typography variant="h6" align="center" fontWeight="bold">
//         {selectedHall ? 'Edit Hall' : 'ADD HALLS'}
//       </Typography>
//       <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
//         <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
//           <Typography sx={{ fontWeight: 'bold' }}>Hall Name:</Typography>
//           <TextField
//             name="name"
//             value={hall.name}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             InputLabelProps={{ style: { fontWeight: 'bold' } }}
//           />
//         </Box>
//         <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
//           <Typography sx={{ fontWeight: 'bold' }}>Location:</Typography>
//           <TextField
//             name="location"
//             value={hall.location}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             InputLabelProps={{ style: { fontWeight: 'bold' } }}
//           />
//         </Box>
//         <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
//           <Typography sx={{ fontWeight: 'bold' }}>Amenities:</Typography>
//           <TextField
//             name="amenities"
//             value={hall.amenities}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             InputLabelProps={{ style: { fontWeight: 'bold' } }}
//           />
//         </Box>
//         <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
//           <Typography sx={{ fontWeight: 'bold' }}>Rating:</Typography>
//           <TextField
//             name="rating"
//             type="number"
//             value={hall.rating}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             InputLabelProps={{ style: { fontWeight: 'bold' } }}
//           />
//         </Box>
//         <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
//           <Typography sx={{ fontWeight: 'bold' }}>Pricing:</Typography>
//           <TextField
//             name="pricing"
//             value={hall.pricing}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             InputLabelProps={{ style: { fontWeight: 'bold' } }}
//          />
//          </Box>
//          <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
//           <Typography sx={{ fontWeight: 'bold' }}>Accommodation:</Typography>
//           <TextField
//             name="accommodation"
//             type="number"
//             value={hall.accommodation}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             InputLabelProps={{ style: { fontWeight: 'bold' } }}
//           />
//         </Box>
//         <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
//           <Typography sx={{ fontWeight: 'bold' }}>Image URL:</Typography>
//           <TextField
//             name="image"
//             value={hall.image}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             InputLabelProps={{ style: { fontWeight: 'bold' } }}
//           />
//         </Box>
//         <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//           <Button variant="contained" color="primary" type="submit">
//             {selectedHall ? 'Update Hall' : 'Add Hall'}
//           </Button>
//         </Box>
//       </Box>
//     </Paper>
//   );
// };

// export default ManageHall;

// import React, { useState, useEffect } from 'react';
// import { TextField, Button, Box, Paper, Typography, CssBaseline, Grid } from '@mui/material';
// import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
// import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
// import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
// import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Header from '../Header';
// import Sidebar from '../Sidebar'; // Import Sidebar component
// import Simplefoot from '../simplefoot/Simplefoot';

// const theme = createTheme({
//   typography: {
//     fontFamily: '"Quicksand", "Helvetica Neue", Arial, sans-serif',
//   },
// });

// const ManageHall = () => {
//   const [halls, setHalls] = useState([]);
//   const [selectedHall, setSelectedHall] = useState(null);

//   useEffect(() => {
//     const storedHalls = JSON.parse(localStorage.getItem('halls')) || [];
//     setHalls(storedHalls);
//   }, []);

//   const handleSave = (hall) => {
//     let updatedHalls;
//     if (selectedHall) {
//       updatedHalls = halls.map((h) => (h.id === hall.id ? hall : h));
//       setSelectedHall(null);
//     } else {
//       hall.id = Date.now();
//       updatedHalls = [...halls, hall];
//     }
//     setHalls(updatedHalls);
//     localStorage.setItem('halls', JSON.stringify(updatedHalls));
//     scrollToHall(hall.id);
//   };

//   const handleEdit = (hall) => {
//     setSelectedHall(hall);
//     document.getElementById('hall-form').scrollIntoView({ behavior: 'smooth' });
//   };

//   const handleDelete = (id) => {
//     const updatedHalls = halls.filter((hall) => hall.id !== id);
//     setHalls(updatedHalls);
//     localStorage.setItem('halls', JSON.stringify(updatedHalls));
//   };

//   const handleCancel = () => {
//     setSelectedHall(null);
//   };

//   const scrollToHall = (id) => {
//     const element = document.getElementById(`hall-${id}`);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Header /> {/* Header at the top */}
//       <Box sx={{ display: 'flex', minHeight: '100vh' }}>
//         <Sidebar /> {/* Sidebar on the left */}
//         <Box component="main" sx={{ flexGrow: 1, p: 3, display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
//           <Box sx={{ width: '100%', maxWidth: 1000 }}>
//             <Typography variant="h3" gutterBottom align="center">
//               Manage Halls
//             </Typography>
//             <Box id="hall-form">
//               <HallForm selectedHall={selectedHall} onSave={handleSave} onCancel={handleCancel} />
//             </Box>
//             <Grid container spacing={3} sx={{ mt: 3 }}>
//               {halls.map((hall) => (
//                 <Grid item xs={12} sm={6} md={4} key={hall.id}>
//                   <Paper
//                     id={`hall-${hall.id}`}
//                     sx={{ p: 2, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' }, height: '100%' }}
//                   >
//                     <Typography variant="h6" align="center" sx={{ fontWeight: 'bold' }}>
//                       <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
//                         <AccountBalanceOutlinedIcon /> {hall.name}
//                       </Box>
//                     </Typography>
//                     <img
//                       src={hall.image || 'https://via.placeholder.com/150'}
//                       alt={hall.name}
//                       style={{ width: '100%', height: 'auto' }}
//                     />
//                     <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
//                       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                         <LocationOnOutlinedIcon /> <Typography sx={{ fontWeight: 'bold' }}>Location:</Typography>{' '}
//                         <Typography>{hall.location}</Typography>
//                       </Box>
//                       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                         <InfoOutlinedIcon /> <Typography sx={{ fontWeight: 'bold' }}>Amenities:</Typography>{' '}
//                         <Typography>{hall.amenities}</Typography>
//                       </Box>
//                       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                         <StarOutlinedIcon /> <Typography sx={{ fontWeight: 'bold' }}>Rating:</Typography>{' '}
//                         <Typography>{hall.rating}</Typography>
//                       </Box>
//                       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                         <CurrencyRupeeOutlinedIcon /> <Typography sx={{ fontWeight: 'bold' }}>Pricing:</Typography>{' '}
//                         <Typography>{hall.pricing}</Typography>
//                       </Box>
//                       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                         <GroupOutlinedIcon /> <Typography sx={{ fontWeight: 'bold' }}>Accommodation:</Typography>{' '}
//                         <Typography>{hall.accommodation}</Typography>
//                       </Box>
//                     </Box>
//                     <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
//                       <Button variant="outlined" color="secondary" onClick={() => handleEdit(hall)}>
//                         Edit Hall
//                       </Button>
//                       <Button variant="outlined" color="error" onClick={() => handleDelete(hall.id)}>
//                         Delete Hall
//                       </Button>
//                     </Box>
//                   </Paper>
//                 </Grid>
//               ))}
//             </Grid>
//           </Box>
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// };

// const HallForm = ({ selectedHall, onSave, onCancel }) => {
//   const [hall, setHall] = useState({
//     name: '',
//     location: '',
//     amenities: '',
//     rating: '',
//     pricing: '',
//     accommodation: '',
//     image: ''
//   });

//   useEffect(() => {
//     if (selectedHall) {
//       setHall(selectedHall);
//     } else {
//       setHall({
//         name: '',
//         location: '',
//         amenities: '',
//         rating: '',
//         pricing: '',
//         accommodation: '',
//         image: ''
//       });
//     }
//   }, [selectedHall]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setHall({ ...hall, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(hall);
//   };

//   return (
//     <Paper sx={{ padding: 3, maxWidth: 470, margin: 'auto' }}>
//       <Typography variant="h6" align="center" fontWeight="bold" >
//         {selectedHall ? 'Edit Hall' : 'ADD HALLS'}
//       </Typography>
//       <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
//         {/* Form Fields */}
//         <Box sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
//           <AccountBalanceOutlinedIcon />
//           <Typography sx={{ fontWeight: 'bold', width: 100 }}>Hall Name :</Typography>
//           <TextField
//             name="name"
//             placeholder="Enter Hall Name"
//             value={hall.name}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             label="Hall Name"
//             sx={{width:300}}
//           />
//         </Box>
//         <Box sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
//           <LocationOnOutlinedIcon />
//           <Typography sx={{ fontWeight: 'bold', width: 100 }}>Location :</Typography>
//           <TextField
//             name="location"
//             placeholder="Enter Location"
//             value={hall.location}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             label="Location"
//             sx={{width:300}}

//           />
//         </Box>
//         <Box sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
//           <InfoOutlinedIcon />
//           <Typography sx={{ fontWeight: 'bold', width: 100 }}>Amenities :</Typography>
//           <TextField
//             name="amenities"
//             placeholder="Enter Amenities"
//             value={hall.amenities}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             label="Amenities"
//             sx={{width:300}}

//           />
//         </Box>
//         <Box sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
//           <StarOutlinedIcon />
//           <Typography sx={{ fontWeight: 'bold', width: 100 }}>Rating :</Typography>
//           <TextField
//             name="rating"
//             placeholder="Enter Rating"
//             value={hall.rating}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             label="Rating"
//             sx={{width:300}}

//           />
//         </Box>
//         <Box sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
//           <CurrencyRupeeOutlinedIcon />
//           <Typography sx={{ fontWeight: 'bold', width: 100 }}>Pricing :</Typography>
//           <TextField
//             name="pricing"
//             placeholder="Enter Pricing"
//             value={hall.pricing}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             label="Pricing"
//             sx={{width:300}}

//           />
//         </Box>
//         <Box sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
//           <GroupOutlinedIcon />
//           <Typography sx={{ fontWeight: 'bold', width: 100 }}>No of Pax :</Typography>
//           <TextField
//             name="accommodation"
//             placeholder="Enter Accommodation Capacity"
//             value={hall.accommodation}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             label="Accommodation"
//             sx={{width:300}}

//           />
//         </Box>
//         <Box sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
//           <ImageOutlinedIcon />
//           <Typography sx={{ fontWeight: 'bold', width: 100 }}>Image URL :</Typography>
//           <TextField
//             name="image"
//             placeholder="Enter Image URL"
//             value={hall.image}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             label="Image URL"
//             sx={{width:300}}

//           />
//         </Box>
//         <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
//           <Button variant="contained" color="primary" type="submit">
//             Save
//           </Button>
//           <Button variant="outlined" color="secondary" onClick={onCancel}>
//             Cancel
//           </Button>
//         </Box>
//       </Box>
//     </Paper>
//   );
// };

// export default ManageHall;

import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Paper, Typography, CssBaseline, Grid } from '@mui/material';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Simplefoot from '../simplefoot/Simplefoot';

const theme = createTheme({
  typography: {
    fontFamily: '"Quicksand", "Helvetica Neue", Arial, sans-serif',
  },
});

const ManageHall = () => {
  const [halls, setHalls] = useState([]);
  const [selectedHall, setSelectedHall] = useState(null);

  useEffect(() => {
    const storedHalls = JSON.parse(localStorage.getItem('halls')) || [];
    setHalls(storedHalls);
  }, []);

  const handleSave = (hall) => {
    let updatedHalls;
    if (selectedHall) {
      updatedHalls = halls.map((h) => (h.id === hall.id ? hall : h));
      setSelectedHall(null);
    } else {
      hall.id = Date.now();
      updatedHalls = [...halls, hall];
    }
    setHalls(updatedHalls);
    localStorage.setItem('halls', JSON.stringify(updatedHalls));
    scrollToHall(hall.id);
  };

  const handleEdit = (hall) => {
    setSelectedHall(hall);
    document.getElementById('hall-form').scrollIntoView({ behavior: 'smooth' });
  };

  const handleDelete = (id) => {
    const updatedHalls = halls.filter((hall) => hall.id !== id);
    setHalls(updatedHalls);
    localStorage.setItem('halls', JSON.stringify(updatedHalls));
  };

  const handleCancel = () => {
    setSelectedHall(null);
  };

  const scrollToHall = (id) => {
    const element = document.getElementById(`hall-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header /> {/* Header at the top */}
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <Sidebar sx={{ height: 'auto', minHeight: '100%', flexShrink: 0 }} /> {/* Sidebar on the left */}
          <Box component="main" sx={{ flexGrow: 1, p: 3, display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <Box sx={{ width: '100%', maxWidth: 1000 }}>
              <Typography variant="h3" gutterBottom align="center">
                Manage Halls
              </Typography>
              <Box id="hall-form">
                <HallForm selectedHall={selectedHall} onSave={handleSave} onCancel={handleCancel} />
              </Box>
              <Grid container spacing={3} sx={{ mt: 3 }}>
                {halls.map((hall) => (
                  <Grid item xs={12} sm={6} md={4} key={hall.id}>
                    <Paper
                      id={`hall-${hall.id}`}
                      sx={{ p: 2, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' }, height: '100%' }}
                    >
                      <Typography variant="h6" align="center" sx={{ fontWeight: 'bold' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                          <AccountBalanceOutlinedIcon /> {hall.name}
                        </Box>
                      </Typography>
                      <img
                        src={hall.image || 'https://via.placeholder.com/150'}
                        alt={hall.name}
                        style={{ width: '100%', height: 'auto' }}
                      />
                      <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <LocationOnOutlinedIcon /> <Typography sx={{ fontWeight: 'bold' }}>Location:</Typography>{' '}
                          <Typography>{hall.location}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <InfoOutlinedIcon /> <Typography sx={{ fontWeight: 'bold' }}>Amenities:</Typography>{' '}
                          <Typography>{hall.amenities}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <StarOutlinedIcon /> <Typography sx={{ fontWeight: 'bold' }}>Rating:</Typography>{' '}
                          <Typography>{hall.rating}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <CurrencyRupeeOutlinedIcon /> <Typography sx={{ fontWeight: 'bold' }}>Pricing:</Typography>{' '}
                          <Typography>{hall.pricing}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <GroupOutlinedIcon /> <Typography sx={{ fontWeight: 'bold' }}>Accommodation:</Typography>{' '}
                          <Typography>{hall.accommodation}</Typography>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                        <Button variant="outlined" color="secondary" onClick={() => handleEdit(hall)}>
                          Edit Hall
                        </Button>
                        <Button variant="outlined" color="error" onClick={() => handleDelete(hall.id)}>
                          Delete Hall
                        </Button>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
        <Simplefoot /> {/* Footer */}
      </Box>
    </ThemeProvider>
  );
};

const HallForm = ({ selectedHall, onSave, onCancel }) => {
  const [hall, setHall] = useState({
    name: '',
    location: '',
    amenities: '',
    rating: '',
    pricing: '',
    accommodation: '',
    image: ''
  });

  useEffect(() => {
    if (selectedHall) {
      setHall(selectedHall);
    } else {
      setHall({
        name: '',
        location: '',
        amenities: '',
        rating: '',
        pricing: '',
        accommodation: '',
        image: ''
      });
    }
  }, [selectedHall]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHall({ ...hall, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(hall);
  };

  return (
    <Paper sx={{ padding: 3, maxWidth: 470, margin: 'auto' }}>
      <Typography variant="h6" align="center" fontWeight="bold">
        {selectedHall ? 'Edit Hall' : 'ADD HALLS'}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        {/* Form Fields */}
        <Box sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
          <AccountBalanceOutlinedIcon />
          <Typography sx={{ fontWeight: 'bold', width: 100 }}>Hall Name :</Typography>
          <TextField
            name="name"
            placeholder="Enter Hall Name"
            value={hall.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            label="Hall Name"
            sx={{ width: 300 }}
          />
        </Box>
        <Box sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
          <LocationOnOutlinedIcon />
          <Typography sx={{ fontWeight: 'bold', width: 100 }}>Location :</Typography>
          <TextField
            name="location"
            placeholder="Enter Location"
            value={hall.location}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            label="Location"
            sx={{ width: 300 }}
          />
        </Box>
        <Box sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
          <InfoOutlinedIcon />
          <Typography sx={{ fontWeight: 'bold', width: 100 }}>Amenities :</Typography>
          <TextField
            name="amenities"
            placeholder="Enter Amenities"
            value={hall.amenities}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            label="Amenities"
            sx={{ width: 300 }}
          />
        </Box>
        <Box sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
          <StarOutlinedIcon />
          <Typography sx={{ fontWeight: 'bold', width: 100 }}>Rating :</Typography>
          <TextField
            name="rating"
            placeholder="Enter Rating"
            value={hall.rating}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            label="Rating"
            sx={{ width: 300 }}
          />
        </Box>
        <Box sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
          <CurrencyRupeeOutlinedIcon />
          <Typography sx={{ fontWeight: 'bold', width: 100 }}>Pricing :</Typography>
          <TextField
            name="pricing"
            placeholder="Enter Pricing"
            value={hall.pricing}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            label="Pricing"
            sx={{ width: 300 }}
          />
        </Box>
        <Box sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
          <GroupOutlinedIcon />
          <Typography sx={{ fontWeight: 'bold', width: 100 }}>No of Pax :</Typography>
          <TextField
            name="accommodation"
            placeholder="Enter Accommodation Capacity"
            value={hall.accommodation}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            label="Accommodation"
            sx={{ width: 300 }}
          />
        </Box>
        <Box sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
          <ImageOutlinedIcon />
          <Typography sx={{ fontWeight: 'bold', width: 100 }}>Image URL :</Typography>
          <TextField
            name="image"
            placeholder="Enter Image URL"
            value={hall.image}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            label="Image URL"
            sx={{ width: 300 }}
          />
        </Box>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button variant="contained" color="primary" type="submit">
            Save
          </Button>
          <Button variant="outlined" color="secondary" onClick={onCancel}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default ManageHall;
