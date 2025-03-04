import React from 'react';
import { createStyles, Group, Title, Text, Button, Container, Center } from '@mantine/core';
import { Code, Cloud, Book, ZoomQuestion, BrandSlack, BrandGithub, Mail } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        margin: 0,
        paddingTop: 50,
        paddingBottom: 80,
        border: 'none',
        background: 'rgb(0,25,51)',
        background: 'linear-gradient(359deg, rgb(50 50 50) 0%, rgb(78 78 78) 51%, rgb(100 100 100) 100%)',
        '@media (max-width: 755px)': {
            paddingTop: 80,
            paddingBottom: 60,
        },
    },

    inner: {
        position: 'relative',
        zIndex: 1,
    },

    title: {
        textAlign: 'center',
        fontWeight: 800,
        fontSize: 40,
        letterSpacing: -1,
        color: theme.colorScheme === 'light' ? theme.white : theme.black,
        marginBottom: theme.spacing.xs,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        '@media (max-width: 520px)': {
            fontSize: 28,
        },
    },

    description: {
        color: 'white',
        textAlign: 'center',

        '@media (max-width: 520px)': {
            fontSize: theme.fontSizes.md,
            paddingLeft: theme.spacing.xs,
            paddingRight: theme.spacing.xs,
        },
    },

    controls: {
        marginTop: theme.spacing.lg,
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 5,

        '@media (max-width: 520px)': {
            flexDirection: 'column',
            width: 360,
            marginLeft: theme.spacing.lg,
        },

        '@media (max-width: 360px)': {
            flexDirection: 'column',
            width: 360,
            marginLeft: 0,
        },
    },

    control: {
        '&:not(:first-of-type)': {
            marginLeft: theme.spacing.md,
        },

        '@media (max-width: 520px)': {
            height: 42,
            fontSize: theme.fontSizes.md,
            width: 300,

            '&:not(:first-of-type)': {
                marginTop: theme.spacing.md,
                marginLeft: 0,
            },
        },
    },

    btncontrol: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        '@media (max-width: 520px)': {
            fontSize: theme.fontSizes.md,
            width: 360,
            marginLeft: theme.spacing.xl,
        },
    },

    inputWrapper: {
        width: '100%',
        flex: '1',
    },

    input: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRight: 0,
    },
}));

export function InterestedField() {
    const { classes } = useStyles();

    return (
        <Center className={classes.wrapper} size="lg">
            <div className={classes.inner}>
                <Title className={classes.title}>
                    Are{' '}
                    <Text component="span" color="yellow" inherit>
                        you
                    </Text>{' '}
                    interested?
                </Title>

                <Container p={0} size={600}>
                    <Text size="lg" color="dimmed" className={classes.description}>
                        Select an area that interests you to see how to get started.
                    </Text>
                </Container>
                {/* Area of interest buttons */}
                <Group className={classes.controls} position='center'>
                    <a href="/developer">
                        <Button leftIcon={<Code />} className={classes.control} color="yellow" size="lg">
                            App Development
                        </Button>
                    </a>
                    <a href="/srepractices">
                        <Button leftIcon={<Cloud />} className={classes.control} color="yellow" size="lg">
                            SRE and DevOps
                        </Button>
                    </a>
                    <a href="/docs-training">
                        <Button leftIcon={<Book />} className={classes.control} color="yellow" size="lg">
                            Training
                        </Button>
                    </a>
                    <a href="https://github.com/operate-first/support">
                        <Button leftIcon={<ZoomQuestion />} className={classes.control} color="yellow" size="lg">
                            Operate First Support
                        </Button>
                    </a>
                </Group>
                <Group className={classes.controls}>
                    <a href="/data-scientist">
                        <Button leftIcon={<Book />} className={classes.control} size="lg" variant="default" color="gray">
                            Data Science Learning Pathway
                        </Button>
                    </a>
                </Group>
                {/* Want to get involed */}
                <Title align="center" style={{ color: 'white', marginTop: 40 }} className={classes.title}>Want to get involved?</Title>
                <Container p={0} size={600}>
                    <Text size="lg" color="dimmed" className={classes.description}>
                        Follow us or join the community on GitHub, in Slack, and on our mailing list.
                    </Text>
                </Container>

                <Group className={classes.controls}>
                    <a href="https://github.com/operate-first">
                        <Button leftIcon={<BrandGithub />} className={classes.control} size="lg" variant="default" color="gray">
                            GitHub
                        </Button>
                    </a>
                    <a href="https://join.slack.com/t/operatefirst/shared_invite/zt-o2gn4wn8-O39g7sthTAuPCvaCNRnLww">
                        <Button leftIcon={<BrandSlack />} className={classes.control} size="lg" variant="default" color="gray">
                            Slack
                        </Button>
                    </a>
                    <a href="https://lists.operate-first.cloud/admin/lists/community.lists.operate-first.cloud/">
                        <Button leftIcon={<Mail />} className={classes.control} size="lg" variant="default" color="gray">
                            Mailing list
                        </Button>
                    </a>
                </Group>
            </div>
        </Center>
    );
}
