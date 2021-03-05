

interface TitleHeadlineProps {
    title: string
}
function TitleHeadline({
    title 
}: TitleHeadlineProps) {

    return (
        <h1>
            {title}
        </h1>
    )
}

export default TitleHeadline