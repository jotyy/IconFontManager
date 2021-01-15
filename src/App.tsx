import React, { useEffect, useState } from 'react';
import { Box, Button, Collapsible, Grommet, Layer, ResponsiveContext } from 'grommet';
import { FormClose } from 'grommet-icons';
import { Header } from './components/Header';
import opentype from 'opentype.js';
import { FontCard } from './components/FontCard';

const theme = {
    global: {
        colors: {
            brand: '#228BE6',
        },
        font: {
            family: 'Roboto',
            size: '18px',
            height: '20px',
        },
    },
};

export interface GlyphType {
    index: number;
    unicode: string;
    path: string;
}

const App: React.FC = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [data, setData] = useState<Array<GlyphType>>([]);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    useEffect(async () => {
        const font = await opentype.load('fonts/udun-wallet.ttf');
        const data: GlyphType[] = [];
        const glyphs = font?.glyphs;
        if (glyphs) {
            for (let i = 0; i < glyphs?.length; i++) {
                data[i] = {
                    index: glyphs.get(i).index,
                    unicode: glyphs.get(i).unicode.toString(16),
                    path: glyphs.get(i).getPath().toSVG(2),
                };
            }
            setData([...data]);
        }
    }, [data]);
    return (
        <Grommet theme={theme} full themeMode="dark">
            <ResponsiveContext.Consumer>
                {(size) => (
                    <Box fill>
                        <Header />
                        <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
                            <Box flex direction={'row'} wrap={true} pad={'medium'} justify={'center'}>
                                {data.length > 0 &&
                                    data.map((value) => (
                                        <FontCard key={value.index} unicode={value.unicode} path={value.path} />
                                    ))}
                            </Box>
                            {!showSidebar || size !== 'small' ? (
                                <Collapsible direction="horizontal" open={showSidebar}>
                                    <Box
                                        flex
                                        width="medium"
                                        background="light-2"
                                        elevation="small"
                                        align="center"
                                        justify="center"
                                    >
                                        sidebar
                                    </Box>
                                </Collapsible>
                            ) : (
                                <Layer>
                                    <Box background="light-2" tag="header" align="center" justify="end" direction="row">
                                        <Button icon={<FormClose />} onClick={() => setShowSidebar(false)} />
                                    </Box>
                                    <Box fill background="light-2" align="center" justify="center">
                                        sidebar
                                    </Box>
                                </Layer>
                            )}
                        </Box>
                    </Box>
                )}
            </ResponsiveContext.Consumer>
        </Grommet>
    );
};

export default App;
