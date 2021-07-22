import React from 'react'
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a new note
      </Typography>

      <Button 
      onClick={()=> console.log('you clicked the submit')}
      type="submit" 
      color="secondary" 
      variant="contained">
        Submit
      </Button>
      {/* <Button type="submit" color="default">Submit</Button>
      <Button type="submit" color="secondary" variant="outlined">Submit</Button>

      <ButtonGroup type="submit" color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>

      </ButtonGroup> */}
    </Container>
  )
}
