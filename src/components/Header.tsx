import React from 'react';
import { Box, Heading, TextInput } from 'grommet';
import { FormSearch } from 'grommet-icons';

export const Header: React.FC = () => {
    return (
        <Box
            tag="header"
            direction="row"
            align="center"
            justify="between"
            background="brand"
            pad={{ left: 'medium', right: 'small', vertical: 'small' }}
            elevation="medium"
            style={{ zIndex: 'initial' }}
        >
            <Heading level="3" margin="none">
                IconFont System
            </Heading>
            <Box direction="row" align="center">
                <Box
                    margin={{ left: 'medium' }}
                    round="xsmall"
                    background={{ color: 'white', opacity: 'weak' }}
                    direction="row"
                    align="center"
                    pad={{ horizontal: 'small' }}
                >
                    <FormSearch color="white" />
                    <TextInput plain placeholder="Search" type="search" />
                </Box>
            </Box>
        </Box>
    );
};
