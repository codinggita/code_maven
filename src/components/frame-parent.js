import { Button } from "@mui/material";
import "./frame-parent.css";

const FrameParent = () => {
  return (
    <div className="frame-parent">
      <h1 className="skills-speak-louder-container">
        <span className="skills-speak-louder-container1">
          <p className="skills-speak-louder">{`Skills speak louder `}</p>
          <p className="than-words">than words</p>
        </span>
      </h1>
      <div className="frame-container">
        <div className="divider-frame">
          <div className="we-help-companies">
            We help companies develop the strongest tech teams
          </div>
        </div>
        <div className="around-we-help">
          around. We help candidates sharpen their tech skills and
        </div>
        <div className="divider-frame1">
          <div className="pursue-job-opportunities">
            pursue job opportunities.
          </div>
        </div>
      </div>
      <div className="button-frame">
        <Button
          className="button-frame-child"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "32",
            background: "#0b60b0",
            borderRadius: "20px",
            "&:hover": { background: "#0b60b0" },
            width: 287,
            height: 80,
          }}
        >
          get Started
        </Button>
      </div>
    </div>
  );
};

export default FrameParent;
