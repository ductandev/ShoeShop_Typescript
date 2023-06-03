//tsrafce

import React, { useEffect, useState } from 'react'

type Props = {
    component: React.FC, // <prop.component />
    // component: JSX.Element // {component}
    mobileComponent?:React.FC
}

interface Screen {
    width: number,
    height? : number
}

const ResponsiveItem = (props: Props) => {

    const [screen,setScreen] = useState<Screen>({
        width:window.innerWidth,
        height: window.innerHeight
    });

    const changeDevice = () => {
        setScreen({
            width:window.innerWidth,
            height:window.innerHeight
        })
    }

    useEffect(()=> {
        
        window.addEventListener('load',changeDevice);
        window.addEventListener('resize',changeDevice);

        return () => {
            window.removeEventListener('load',changeDevice);
            window.removeEventListener('resize',changeDevice);
        }

    },[])

    let Component = props.component;
    if(screen.width < 768 && props.mobileComponent) {
        Component = props.mobileComponent;
    }


  return (
    <Component />
  )
}

export default ResponsiveItem

//<ResponsiveItem component={Home} mobileComponent={HomeMobile} />              // truyền dạng React.FC
//<ResponsiveItem component={<Home />} mobileComponent={<HomeMobile />} />      // truyền dạng JSX.element