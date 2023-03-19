import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import axios from "axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom';


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function Home() {
  const navigate = useNavigate();
  const [topic,setTopic]=useState("");
  const [desc,setDesc]=useState("");
  const [Topiclinks,setTopicLinks]=useState();
  console.log(Topiclinks)
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const [expanded, setExpanded] = React.useState("");
  const [expanded2, setExpanded2] = React.useState("");
  console.log("the expanded value is "+expanded)

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const handleChange2 = (panel) => (event, newExpanded2) => {
    setExpanded2(newExpanded2 ? panel : false);
  };
  //Whole Page Data
  const [PageData, setPageData] = useState({});
  const [quote, setQuote] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get("http://localhost:5001/roadmap/fswd");
        let quote = await axios.get("https://type.fit/api/quotes");
        setQuote(quote.data[0].text);
        setPageData(data.data.getRoadmapData);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.left_navbar}>Hello Guruprakash </div>
        <div className={styles.right_navbar}>
          <button className={styles.logout_button} onClick={()=>navigate('/login')}>Logout</button>
        </div>
      </div>
      <div className={styles.welcome_section}>
        <h1>{PageData.name}</h1>
        <h3>{quote}</h3>
      </div>
      <div className={styles.body}>
        <div className={styles.left_body}>
          <h2 className={styles.Roadmap}>Roadmap </h2>
          {PageData.sections?.map((item,index) => (
            <Accordion
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
            >
              <AccordionSummary
                aria-controls={`panel${index}`}
                id={`panel${index}`}
              >
                <Typography>{item.phase}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {item.path?.map((value,i) => {
                  console.log(value.others.length);
                  if (value.others.length > 0) {
                    console.log("this is list with accordion")
                    console.log(`${i+3}`)
                    return(
                      <Accordion expanded2={expanded2 === `panel${i+10}`}   onChange={handleChange2(`panel${i+10}`)}>
                      <AccordionSummary aria-controls={`panel${i+10}`} id={`panel${i+10}`}>
                        <Typography>{value.topic}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                      <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {value.others.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            onClick={()=>{setTopic(value.topic);setDesc(value.description);setTopicLinks(value.links)}}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText id={labelId} primary={value.topic} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
                      </AccordionDetails>
                    </Accordion>              
                    ); 
                  } else {
                    console.log("this is only list")
                    console.log(value)
                    return(
                      <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[1].map((values) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}   
            onClick={()=>{setTopic(value.topic);setDesc(value.description);setTopicLinks(value.links)}}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText id={labelId} primary={value.topic} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
                    );
                  }
                })}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        <div className={styles.right_body}>
          <div className={styles.topic}>
                {topic}
          </div>
          <div className={styles.description}>
            {parse(desc)}
          </div>
          <div className={styles.links}>
            {topic.length > 0  && <p className={styles.description}>Additional Resources :- </p>}
                {Topiclinks?.map((item)=>{
                  return(
                    <>
                  <a href={item}>{item}</a><br />
                  </>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;


// "<p>hello</p>"
// `<p>hello</p>`
