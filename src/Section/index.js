import "./style.css";

const Section=({title,body,buttons})=>(
     <section className="section"> 
<div className="section__header">
<h3 className="section__title">{title}</h3>
{buttons}
</div>
{body}
</section>

);

export default Section;
