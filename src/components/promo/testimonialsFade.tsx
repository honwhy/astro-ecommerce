
interface Props {
  pageHeaderBgImg: string;
  pageHeaderMinVh: string;
}

export default function TestimonialsFade({
  pageHeaderBgImg,
  pageHeaderMinVh
}: Props) {

  const styles = {
    pageHeader: {
      backgroundImage: 'url(' + pageHeaderBgImg + ')',
      minHeight: pageHeaderMinVh,
    },
  } as const;

  return (
    <>
      <section>
        <div className="container">
          <h3 className="font-weight-bolder mt-4 mb-2">10-YEAR LIMITED WARRANTY</h3> 
          <p className="mb-5 w-60">The Epoxy Pros offers customers a 10-year limited warranty for every floor coating project that is completed. Customers receive a signed warranty certificate that includes the date of purchase and details of warranty coverage.</p>
          <div className="row">
          <div className="col-12">
          <img src={`${import.meta.env.BASE_URL}images/brands.png`} className="img-fluid" alt="user image" />
          </div>
          </div>
        </div>
      </section>
    </>
  );
};