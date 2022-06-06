import TextField from '@mui/material/TextField';


const TextFieldMultiline = ({ width, label, onChange, rows }) => {

    return (
        <TextField
            sx={{
                width: width,
                '& .MuiOutlinedInput-root': {
                    fontSize: 18,
                    fontWeight: 700,
                    borderRadius: '20px',

                },
                '& .MuiOutlinedInput-notchedOutline': {
                    border: '2px solid #000000',
                },
                '& .MuiInputLabel-root': {
                    fontWeight: 700,
                    fontSize: 18,
                    color: '#939393',
                },
            }}
            id="outlined-textarea" label={label} variant="outlined" multiline rows={rows} onChange={onChange} />
    )
}

export default TextFieldMultiline;