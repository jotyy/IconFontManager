import React from 'react';
import { Box, Button, Card, CardBody, DropButton, Text } from 'grommet';
import { More } from 'grommet-icons';

export type FontCardProps = {
    name: string;
    unicode: string;
    path: string;
};

export const FontCard: React.FC<FontCardProps> = ({ name, unicode, path }: FontCardProps) => {
    return (
        <Card pad="small" wrap={true} margin={'small'} height="xsmall" width="medium" hoverIndicator={true}>
            <CardBody direction="row" justify={'around'} align={'center'}>
                <svg
                    fill="purple"
                    width="48"
                    height="48"
                    viewBox="-24 -24 120 2"
                    dangerouslySetInnerHTML={{ __html: path }}
                />
                <Box direction="column" flex-1 align="start" justify="start">
                    <Text size="small" weight="bold">
                        {unicode}
                    </Text>
                    <Text size="xsmall" color="text-gray-800">
                        /u{unicode}
                    </Text>
                </Box>
                <DropButton
                    dropContent={
                        <Box flex direction="column" justify="between">
                            <Button size="small" margin={{ vertical: 'xsmall', horizontal: 'medium' }}>
                                <Text size="small">复制代码</Text>
                            </Button>
                            <Button size="small" margin={{ vertical: 'xsmall', horizontal: 'medium' }}>
                                <Text size="small">复制SVG</Text>
                            </Button>
                        </Box>
                    }
                    icon={<More size="small" />}
                >
                    code
                </DropButton>
            </CardBody>
        </Card>
    );
};
