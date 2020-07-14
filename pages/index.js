import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Box, Button } from "@material-ui/core";
import Link from "../src/Link";
import Cookies from "js-cookie";
import Router from "next/router";

export default function Index() {
  const [isAuthenticated, setAuthenticated] = useState(true);

  const logout = () => {
    Cookies.remove("token");
    Router.push("/");
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      setAuthenticated(false);
      Router.push("/login");
    }
  });

  const renderData = () => {
    return (
      <Container maxWidth="sm">
        <Box my={4}>
          <Button variant="contained" color="primary" onClick={() => logout()}>
            Logout
          </Button>
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

  return isAuthenticated ? renderData() : "";
}
