import Page from '../components/page'
import Story from '../components/story'

export default ({ story }) => {
  console.log('Article -> story', story)
  console.log('Article render()')
  return (
    <div className="item">
      <Story {...story} />

      <style jsx>{`
        .item {
          padding: 10px 29px;
        }

        .form {
          padding: 15px 0;
        }

        .loading {
          font-size: 13px;
        }

        @media (max-width: 750px) {
          .item {
            padding: 8px 0px;
          }
        }
      `}</style>
    </div>
  )
}
