// the cat found error

interface ShowImageProps {
    src: string
    alt: string
}

function ShowImage({
    src,
    alt
}: ShowImageProps) {

    return (
        <img src={src} alt={alt} style={{
            width: 500
        }} />
    )
}

export default ShowImage