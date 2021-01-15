import React from 'react';
import { Box, Button, Heading } from 'grommet';
import { Notification } from 'grommet-icons';

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
                IconFont Manager
            </Heading>
            <Button icon={<Notification />} />
        </Box>
    );
};
