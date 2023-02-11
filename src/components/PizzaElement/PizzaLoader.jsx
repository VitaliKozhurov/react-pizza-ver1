import ContentLoader from "react-content-loader";

const PizzaLoader = (props) => (
   <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
   >
      <rect x="40" y="295" rx="3" ry="3" width="200" height="26" />
      <circle cx="140" cy="145" r="140" />
      <rect x="0" y="330" rx="6" ry="6" width="280" height="66" />
      <rect x="0" y="400" rx="6" ry="6" width="104" height="32" />
      <rect x="120" y="400" rx="10" ry="10" width="159" height="50" />
   </ContentLoader>
)

export default PizzaLoader;