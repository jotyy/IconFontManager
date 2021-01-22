import React, { useEffect, useState } from 'react';
import { Box, Grid, Grommet } from 'grommet';
import opentype from 'opentype.js';
import { FontCard } from './components/FontCard';
import './App.css';
import { Header } from './components/Header';

export interface GlyphType {
    index: number;
    name: string;
    unicode: string;
    path: string;
}

const App: React.FC = () => {
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
                    name: glyphs.get(i).name,
                    unicode: glyphs.get(i).unicode.toString(16),
                    path: glyphs.get(i).getPath().toSVG(2),
                };
            }
            setData([...data]);
        }
    }, [data]);
    return (
        <Grommet full themeMode="dark">
            <Box fill flex direction="column">
                <Header />
                <Grid
                    justifyContent={'between'}
                    columns={'small'}
                    gap={{ row: 'none', column: 'medium' }}
                    pad={'medium'}
                >
                    {data.length > 0 &&
                        data.map((value) => (
                            <FontCard key={value.index} name={value.name} unicode={value.unicode} path={value.path} />
                        ))}
                </Grid>
            </Box>
        </Grommet>
    );
};

export default App;
