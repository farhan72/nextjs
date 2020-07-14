import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "../src/Link";
import Router from "next/router";

export default function Index() {
  const [isLogin, setLogin] = useState(false);
  const renderData = () => {
    return (
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Zyada Corp. Frontend Challenge
          </Typography>
          <Link href="/about" color="secondary">
            Go to the detail page
          </Link>
        </Box>
      </Container>
    );
  };

  useEffect(() => {
    setLogin(true);
    if (!localStorage.getItem("token")) {
      setLogin(false);
      Router.push("/login");
    }
  });
  return isLogin ? renderData() : "";
}
