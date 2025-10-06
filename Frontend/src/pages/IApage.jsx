import { useState, useEffect, use } from "react";
import axios from 'axios';
import { Box, Button, Divider, Stack, TextField, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function IaModel() {
    const [request, setRequest] = useState('');
    const [messages, setMessages] = useState([]);

    const handleRequest = async (e) => {
        e.preventDefault();
        setMessages(prev => [...prev, { role: 'user', text: request }]);

        try {
            const envio = await axios.post('http://localhost:3000/requestToAI/responseFromAI', {
                prompt: request
            });
            setTimeout(() => {
                setMessages(prev => [
                    ...prev,
                    { role: 'AI', text: envio.data.text }
                ]);
            }, 1000);
            setRequest('');
        } catch (error) {
            console.error('Error al enviar los datos', error);
        } finally {
            setRequest('');
        }
    }

    return (
        <Stack flexDirection='column' justifyContent='center' alignItems='center' sx={{
            minHeight: '100dvh',
            width: '100%',
        }}>
            <Typography variant="h2" sx={{
                mb: 3
            }}>Domus</Typography>
            <Stack flexDirection='column-reverse' sx={{
                height: 'auto',
                width: '50%',
            }}>
                <Box component='form' onSubmit={handleRequest} sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    mt: 3,
                    boxShadow: 3
                }}>
                    <TextField
                        placeholder="Ingresa una orden"
                        type='text'
                        variant='outlined'
                        value={request}
                        onChange={(e) => setRequest(e.target.value)}
                        InputLabelProps={{ required: false, style: { color: 'white' } }}
                        InputProps={{
                            style: { color: 'white' }
                        }}
                        sx={{
                            color: 'white',
                            width: '100%',
                            fontSize: '2rem',
                            backgroundColor: '#303030',
                            "& .MuiOutlinedInput-input::placeholder": {
                                color: "white",
                                opacity: 1
                            }
                        }}></TextField>
                    <Button variant="contained" type='submit' sx={{
                        border: 'none',
                        borderRadius: 0,
                        width: 'auto',
                        backgroundColor: 'white'
                    }}><ArrowUpwardIcon fontSize="medium" sx={{ color: 'black' }} /></Button>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    height: '60dvh',
                    p: 3,
                    fontSize: '1.3rem',
                    overflowY: 'auto'
                }}>
                    {messages.map((mensaje, index) => (
                        <Box key={index} sx={{
                            display: 'flex',
                            justifyContent: mensaje.role === 'user' ? 'flex-end' : 'flex-start',
                            mb: 3
                        }}>
                            <Typography sx={{
                                fontSize: '1.2rem',
                                color: mensaje.role === 'user' ? 'white' : 'white',
                                backgroundColor: mensaje.role === 'user' ? '#303030' : 'none',
                                borderRadius: mensaje.role === 'user' ? 2 : 0,
                                width: 'fit-content',
                                p: mensaje.role === 'user' ? 1 : 0
                            }}>
                                {mensaje.text}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Stack>
        </Stack>
    )
};

export default IaModel;