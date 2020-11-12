import React from 'react';
import { Box, Button, Checkbox, CheckboxProps, Typography } from '@material-ui/core';

interface OptionProps extends CheckboxProps {}

const Option: React.FC<OptionProps> = (props) => {
    const { children, ...rest } = props;

    return (
        <Box display="flex" alignItems="center">
            <Checkbox {...rest} />
            <Typography>{children}</Typography>
        </Box>
    );
};

const values = ['hello', 'world'];
const Application = () => {
    const handleSubmit = () => {
        alert('submit');
    };

    return (
        <>
            <Box textAlign="center">
                <Typography variant="h1">Hello :3</Typography>
            </Box>
            <Box
                className="Leonide"
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                mt={5}
            >
                <form>
                    {values.map((value) => (
                        <Option key={value}>{value}</Option>
                    ))}
                    <Button onClick={handleSubmit}> Submit </Button>
                </form>
            </Box>
        </>
    );
};

export default Application;
