// src/components/Resume/DownloadResumeButton.tsx
import { Button } from "../ui/Button/Button";

export const DownloadResumeButton: React.FC = () => {
  return (
    <a
      href="/Christian_Morrow_Resume.pdf"
      download
      style={{ textDecoration: "none" }}
    >
      <Button
        variant="primary"
        size="md"
        leftIcon={<span>⬇️</span>}
      >
        Download Resume
      </Button>
    </a>
  );
};
