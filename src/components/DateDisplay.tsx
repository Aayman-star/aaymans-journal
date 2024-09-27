const DateDisplay = () => {
  const date = new Date() as any;
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  } as const;
  const formattedDate = date.toLocaleString("en-US", options);
  // console.log(formattedDate);
  return (
    <div className={`mt-2`}>
      <h3 className="font-geistSans font-light text-muted-foreground text-center  md:text-lg">
        {formattedDate}
      </h3>
    </div>
  );
};

export default DateDisplay;
