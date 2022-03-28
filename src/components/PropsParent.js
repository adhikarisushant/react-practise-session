import PropsChildren from './PropsChildren'

const PropsParent = () => {
    return (
        <div>
            <h1>This Parent Component will pass its data to its children</h1>
            <PropsChildren name="roshan" education="Computer Engineer" />
        </div>
    )
}

export default PropsParent
