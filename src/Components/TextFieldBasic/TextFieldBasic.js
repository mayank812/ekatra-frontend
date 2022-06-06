import TextField from '@mui/material/TextField';



const TextFieldBasic = ({ label, width, padding, onChange }) => {
    return (
        <TextField id="outlined-basic" label={label} variant="outlined" onChange={onChange}

            sx={{
                width: width,

                '& .MuiOutlinedInput-root': {
                    fontSize: 18,
                    fontWeight: 700,
                    borderRadius: '20px',
                    '&:focus': {
                        borderColor: '#3DBC8D'
                    }
                },

                '& .MuiOutlinedInput-input': {
                    padding: padding
                },
                '& .MuiOutlinedInput-notchedOutline': {
                    border: '2px solid #000000',
                },

                '& .MuiInputLabel-root': {
                    fontWeight: 700,
                    fontSize: 18,
                    color: '#939393',
                },

            }} />
    )
}

export default TextFieldBasic;