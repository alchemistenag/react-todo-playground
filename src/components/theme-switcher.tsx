import React, { FC, useMemo } from 'react';
import { Theme } from '../App';
import { useTheme, useStyleWithTheme } from '../theme';

const style = (theme: Theme) => {
    return {
        text: {
            color: theme.primary
        }
    }
}

export const ThemeSwitcher: FC = () => {

    const { themes, setTheme, currentTheme } = useTheme<Theme>();
    const styles = useStyleWithTheme(style);

    const themesList = useMemo(() => {
        return Object.keys(themes).map(key => ({key}));
    }, [themes]);

    const changeTheme = (key: string) => () => {
        setTheme(key);
    }

    return (
    <div>
        <ul>
            {
                themesList.map((entry) => {
                    return (
                        <li key={entry.key} style={styles.text} onClick={changeTheme(entry.key)}>
                            {entry.key} { currentTheme === entry.key ? 'Aktiv' : '' }
                        </li>
                    )
                })
            }
        </ul>
    </div>);
}