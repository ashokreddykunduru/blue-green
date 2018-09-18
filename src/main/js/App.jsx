import React from "react";
import {
    BasicHeader,
    TopNav,
    HeaderDetails,
} from '@jenkins-cd/design-language';
import Logo from './Logo';

export const App = (props) => {
    const { children } = props;
    return (<div className="Site">
        <BasicHeader className="ContentPageHeader">
            <TopNav>
                <Logo/>
                <div className="u-flex-grow" />
            </TopNav>
            <HeaderDetails>
                <h1 className="commonLogo logo">Jenkins World</h1>
            </HeaderDetails>
        </BasicHeader>
        <main className="Site-content">
            <article>
                {React.cloneElement(children, {...props})}
            </article>
        </main>
        <footer className="Site-footer">
            <div>acme footer</div>
        </footer>
    </div>);
};


export default App;
