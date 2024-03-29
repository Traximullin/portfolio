import { Box, ContactIcon, Section, Text } from "@/presentation/components"
import { BaseLayout, Flex, Footer, Grid } from "@/presentation/layouts"
import Head from "next/head"
import { gitHubSvg } from "@/presentation/assets/svg";

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <BaseLayout>
                    <Section title="контакты">
                        <Grid gridTemplateColumns="1fr min-content">
                            <Text.Description>
                            I’m interested in freelance opportunities. However, if you have other request or 
                            question, don’t hesitate to contact me
                            </Text.Description>
                            <Box themes="noneInternalBorder" title="Message me here">
                                <Flex flexDirection="column" gap={8}>
                                    <Flex alignItems="center" gap={4}>
                                        <ContactIcon src={gitHubSvg} />
                                        <p>github.com/Traximullin</p>
                                    </Flex>
                                    <Flex alignItems="center" gap={4}>
                                        <ContactIcon src={gitHubSvg} />
                                        <p>traximullin@bk.ru</p>
                                    </Flex>
                                </Flex>
                            </Box>
                        </Grid>
                        
                    </Section>
                </BaseLayout>
                <Footer />
            </main>
        </>
    )
}
