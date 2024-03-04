interface Props {
  title: string;
  full_description: string;
  pageHeaderBgImg: string;
  pageHeaderMinVh: string;
  pageHeaderRadius?: string;
}

export default function TestimonialsFade({
  title,
  full_description,
  pageHeaderBgImg,
  pageHeaderMinVh,
  pageHeaderRadius,
}: Props) {

  const styles = {
    pageHeader: {
      backgroundImage: 'url(' + pageHeaderBgImg + ')',
      minHeight: pageHeaderMinVh,
      borderRadius: pageHeaderRadius
    },
  } as const;

  return (
    <>
      <section className="mb-8">
        <div className="page-header py-5 py-md-0" style={styles.pageHeader}>
          <span className="mask bg-black opacity-6"></span>
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-sm-8">
                <h1 className="text-white mb-4">Thumbs Up Company Profile</h1>
                <p className="lead text-white mb-sm-6 mb-4">Thumbs Up is a professional company specializing in industrial-grade materials such as Epoxy and Polyaspartic for flooring services in Vancouver and the surrounding areas.</p>
                {/* <button className="btn btn-white btn-lg">Explore New Collection</button> */}
              </div>
              <div className="col-lg-5 col-sm-4">
                <div className="container card bg-white p-4">
                <h3 className="card-title text-center">Get Your Free Epoxy Flooring Estimate Today!</h3>
                <form className="card-body">
                  <div className="form-group">
                    <input type="text" className="form-control" id="first-name" placeholder="First Name" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="last-name" placeholder="Last Name" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" id="content" rows={8} placeholder="How we can help you" />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
};

