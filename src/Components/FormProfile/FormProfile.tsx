import Fecha from '../Fecha/Fecha'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setInterval, setHistoric, setRealTime, setFrom, setTo } from '../../features/grafic'
import {
    FormControl,
    FormHelperText,
    Checkbox,
    FormControlLabel,
    Select,
    MenuItem,
    Button
} from '@mui/material';
const FormProfile = () => {
    const [form, setForm] = useState({
        interval: 0,
        realTime: false,
        historic: false,
        from: null,
        to: null,
    })
    const dispatch = useDispatch();
    const handleChangeHistoric = (e:any) => {
        setForm({...form, historic: e.target.checked, realTime: false})
    }
    const handleSumbit = () => {
        dispatch(setRealTime(form.realTime))
        dispatch(setHistoric(form.historic))
        dispatch(setFrom(form.from))
        dispatch(setTo(form.to))
        dispatch(setInterval(form.interval))
    }
    return (
        <>
            <FormControl sx={{ padding: 1, display: 'flex', gap: 4 }}>
                <FormControlLabel checked={form.realTime} onChange={(e: any) => setForm({...form, realTime: e.target.checked, historic: false})} control={<Checkbox />} label="Tiempo Real" />
                <div className='historic-container'>

                    <FormControlLabel checked={form.historic} onChange={handleChangeHistoric} control={<Checkbox />} label="Historico" />
                    <Fecha value={form.from} onchange={(e: any) => setForm({...form, from: e.$d.toISOString()})} text="Desde" />
                    <Fecha value={form.to} onchange={(e: any) => setForm({...form, to: e.$d.toISOString()})} text="Hasta" />
                </div>
                <FormControlLabel control={
                    <Select sx={{ width: 300, marginRight: 2 }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={form.interval}
                        label="Age"
                        onChange={(e) => setForm({...form, interval: e.target.value as number})}
                    >   <MenuItem value={0}>Seleccionar</MenuItem>
                        <MenuItem value={1}>One</MenuItem>
                        <MenuItem value={5}>Five</MenuItem>
                        <MenuItem value={15}>Fifteen</MenuItem>
                    </Select>
                } label=" Intervalo" />
                <div>
                    <Button onClick={handleSumbit} variant="contained">
                        Graficar
                    </Button>
                </div>
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>

            </FormControl>
        </>
    )
}

export default FormProfile;