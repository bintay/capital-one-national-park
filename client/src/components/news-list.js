import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import LoadingNewsArticle from "./loading-news-article";

const NewsList = (props) => (
  <div>
    {
      props.loading
        ? <div>
            <LoadingNewsArticle />
            <LoadingNewsArticle />
            <LoadingNewsArticle />
          </div>
        : props.news.map(v => (
          <a href={v.url} style={{ textDecoration: "none" }}>
            <Paper elevation={0} style={{ border: "1px solid #ddd", margin: "10px 0" }}>
              <Grid container spacing={0}>
                <Grid item xs={3} m={2} xl={1}>
                  <div style={{ width: "100%", paddingBottom: "100%", background: `url(${v.image ? v.image.url : v.listingimage.url}) center`, backgroundSize: "cover", borderRadius: "4px 0 0 4px" }}></div>
                </Grid>
                <Grid item xs={9} m={10} xl={11}>
                  <div style={{ padding: "10px 15px" }}>
                    { 
                      v.url.length > 0
                        ? <Button color="primary" href={v.url} style={{ float: "right" }}>Read More</Button>
                        : null
                    }
                    <Typography variant="h5">
                      {v.title}
                    </Typography>
                    <br /> 
                    <Typography variant="body2" color="textSecondary">
                      {v.abstract || v.listingdescription}
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </a>
        ))
    }
  </div>
)

export default NewsList;
