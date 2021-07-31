import { Box, Button, ButtonGroup, Center, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FiHome, FiRefreshCw } from "react-icons/fi";
import TextLink from "../components/common/TextLink";
import Layout from "../components/layouts";
import ScreenCenter from "../components/layouts/ScreenCenter";
import { DISCORD_INVITE, GITHUB_ISSUE, SUPPORT_EMAIL } from "../data/RefLinks";

const Custom500: NextPage = () => {
  const router = useRouter();

  const reload = () => {
    router.reload();
  };

  return (
    <Layout hasHeaderHidden>
      <ScreenCenter py="8" flexWrap={{ base: "wrap-reverse", lg: "nowrap" }}>
        <Box flexBasis="50%" alignItems="flex-start">
          <Text
            as="h1"
            fontSize={{ base: "4xl", lg: "6xl" }}
            fontWeight="bold"
            letterSpacing="tight"
            mb="2"
          >
            Ouch!
          </Text>
          <Text fontSize={{ base: "lg", lg: "2xl" }} fontWeight="medium" mb="8">
            An unexpected error occured
          </Text>
          <Text mb="4" fontSize={{ base: "sm", lg: "md" }}>
            A report for this error has been sent to us already, and we&lsquo;re
            looking into it. Meanwhile you can try to reload the page and see if
            this issue is fixed
          </Text>
          <ButtonGroup mb="8">
            <Button
              colorScheme="purple"
              variant="solid"
              leftIcon={<FiRefreshCw />}
              onClick={reload}
            >
              Reload page
            </Button>
            <Link href="/home">
              <Button
                colorScheme="purple"
                variant="ghost"
                leftIcon={<FiHome />}
              >
                Return Home
              </Button>
            </Link>
          </ButtonGroup>
          <Text mb="4" fontSize="sm">
            If the issue persists, feel free to reach out to us on{" "}
            <TextLink link={DISCORD_INVITE} text="Discord" />, or raise an issue
            on <TextLink link={GITHUB_ISSUE} text="GitHub" />, or else send us
            an <TextLink link={SUPPORT_EMAIL} text="email" />.
          </Text>
        </Box>
        <Center flexBasis={{ md: "50%" }}>
          <Image
            src="/500.png"
            alt="404 Not Found"
            width="365"
            height="456"
            layout="intrinsic"
          />
        </Center>
      </ScreenCenter>
    </Layout>
  );
};

export default Custom500;