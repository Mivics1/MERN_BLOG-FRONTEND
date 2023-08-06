
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email, LinkedIn } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://x7d4c5z5.stackpathcdn.com/wp-content/uploads/tc/2022/11/binace-1536x864.jpg);
    width: 100%;
    height: 50vh;
    background-size: cover;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
    line-height: 1.8;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Binance Utiva Project</Typography>
                <Text variant="h5">My name is Agboola Michael Daramola, your generosity and vision have played a pivotal role in shaping my journey as a software developer, and I am truly honored to have been a beneficiary of your generosity.<br />
                    The Binance Utiva project has been instrumental in transforming my aspirations into reality. Through the comprehensive learning opportunities and resources it offered, I was able to immerse myself in the world of software development. The guidance and mentorship provided by the project were invaluable, allowing me to gain a deeper understanding of coding, programming languages, and software engineering principles.<br />
                    Your commitment to nurturing talent and fostering education is commendable. The impact of your support goes far beyond just acquiring technical skills; it has empowered me to dream bigger and contribute meaningfully to the field of technology. I am excited about the opportunities that lie ahead, and I am confident that the skills I have gained will serve as a strong foundation for my future endeavors.<br />
                    Once again, I extend my heartfelt gratitude to you for your unwavering belief in the potential of individuals like myself. Your contribution has made a lasting impression on my life, and I am determined to pay it forward by using my skills to make a positive impact on the world around me.<br />
                    Thank you for making a difference in my journey and in the lives of countless others. Your support has not only enriched our technical abilities but also instilled a sense of responsibility to use our knowledge for the greater good. I am truly thankful for your generosity and the opportunities you have provided.<br />

                    {/* If you are interested, you can view some of my favorite projects here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/mivics1" color="inherit" target="_blank"><GitHub /></Link>
                    </Box> */}
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.linkedin.com/in/agboola-michael-daramola/" color="inherit" target="_blank">
                            <LinkedIn />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:agbooladaramola7@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;