export default function Loading() {
    const loadingStyle={
        padding:'10px',
        border: '1px solid red',
        borderRadius: '30px',
        fontSize: '25px'
    }
    return (
        <div style={loadingStyle}>
            <p>
                 Your Data Cooking Right Now!
            </p>
        </div>
    )
}