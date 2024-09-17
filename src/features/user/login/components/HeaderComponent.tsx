type HeaderComponentProps = {
    message: string
}
export function HeaderComponent({message}: HeaderComponentProps) {
    return (
        <>
            <h2 className="test-2xl text-center">Welcome</h2>
            <h6 className="font-light text-xs text-center m-3 text-gray-500">Sign in to continue to app</h6>
            {message && <p className="text-xs text-green-500 text-center">{message}</p>}
        </>
    )
}