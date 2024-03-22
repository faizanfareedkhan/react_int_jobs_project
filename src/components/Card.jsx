const Card = ({ children, bg = "bg-gray-100" }) => {
  return <div className={`rounded-lg ${bg} p-6 shadow-md`}>{children}</div>;
};

export default Card;
