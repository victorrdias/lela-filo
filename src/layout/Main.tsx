import { Flex, FlexProps } from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect } from "react";

/**
 * How to use this component:
 * ```
 * <Main title="Page title">
 *    Content of the page
 * </Main>
 * ```
 */

export interface MainLayoutProps extends FlexProps {
  children: React.ReactNode;
  title?: string;
}

export const Main = ({ children, title, ...rest }: MainLayoutProps) => {
  const docHeight = () => {
    if (typeof window === "object") {
      const doc = document.documentElement;

      doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
    }
  };

  useEffect(() => {
    if (typeof window === "object") {
      window.addEventListener("resize", docHeight);
    }
  }, []);

  docHeight();

  const formattedTitle = `${title && title} | BSB Vistos`;

  return (
    <Flex
      as="main"
      w="100%"
      maxW="100vw"
      direction="column"
      bgColor="green.50"
      px={[10, 20, 30]}
      {...rest}
    >
      <Head>
        <title>{formattedTitle}</title>
      </Head>

      <Flex
        as="article"
        minH="calc(var(--doc-height))"
        h="100%"
        direction="column"
        justifyContent="center"
        align="center"
      >
        {children}
      </Flex>
    </Flex>
  );
};
