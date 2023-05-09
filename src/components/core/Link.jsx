import { Link as InternalLink } from "react-router-dom";

function Link(props) {
  const { to, name, children } = props;

  if (to.startsWith("/")) {
    return (
      <InternalLink to={to} {...props}>
        {children}
      </InternalLink>
    );
  }

  return (
    <a href={to} target="_blank" rel="noreferrer" {...props}>
      {children}
    </a>
  );
}

export default Link;
