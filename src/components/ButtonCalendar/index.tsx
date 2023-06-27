import { Button, Buttons } from "./style";

export function ButtonCalendar() {
  return (
    <Buttons>
      <Button>
        <svg
          width="9"
          height="14"
          viewBox="0 0 9 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 13.25L1.25 7L7.5 0.75"
            stroke="#A9A9B2"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>

      <Button>
        <svg
          width="9"
          height="14"
          viewBox="0 0 9 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.49998 0.75L7.74998 7L1.49998 13.25"
            stroke="#A9A9B2"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
    </Buttons>
  );
}
