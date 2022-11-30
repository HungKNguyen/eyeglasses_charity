import React from "react";

export function NavigatorObserver(props) {
    const [isSeen, setSeen] = React.useState(false);
    const domRef = React.useRef();

    React.useEffect(() => {
        const domRefCurrent = domRef.current
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setSeen(entry.isIntersecting || isSeen))
        });
        observer.observe(domRefCurrent);
        return () => observer.unobserve(domRefCurrent);
    }, [isSeen]);

    React.useEffect(() => {
        if (isSeen) {
            props.onSeen()
        }
    }, [isSeen])

    return (
        <div ref={domRef} id={props.id}>
            {props.children}
        </div>
    )
}

NavigatorObserver.defaultProps = {
    onSeen: () => {},
    id: ""
}
