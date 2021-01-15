import React from 'react';
import { Card, CardBody, Text } from 'grommet';

export type FontCardProps = {
    unicode: string;
    path: string;
};

export const FontCard: React.FC<FontCardProps> = ({ unicode, path }: FontCardProps) => {
    return (
        <Card
            wrap={true}
            align={'center'}
            direction={'row'}
            margin={'small'}
            height="small"
            width="small"
            background="light-1"
        >
            <CardBody justify={'center'} align={'center'}>
                <Text size={'small'} weight={'bold'}>
                    /u{unicode}
                </Text>
                <svg
                    fill="currentColor"
                    width="80"
                    height="80"
                    viewBox="-24 -24 120 2"
                    dangerouslySetInnerHTML={{ __html: path }}
                />
            </CardBody>
        </Card>
    );
};
