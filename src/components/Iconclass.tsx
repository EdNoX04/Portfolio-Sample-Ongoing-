export const Iconclass = ({ component }: {component: React.ElementType}) => {
    const Component = component;
    return (
        <Component className="size-10" />
    );
}