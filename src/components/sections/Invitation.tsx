import classNames from 'classnames/bind'
import styles from './Invitation.module.scss'
import Section from '../shared/Section'
import Text from '../shared/Text'

const cx = classNames.bind(styles)

const Invitation = () => {
  return (
    <Section className={cx('container')}>
      <MessageIcon className={cx('message-icon')} />
      <Text>{`안녕 횰랭아 \n 글 편지가 아닌 인터넷 편지!?!?!? 크크크 \n 내가 직접 만든 편지지다!! \n 그 어디서도 볼 수 없지!! \n 어디서 이런 편지 받아 봤냐고오~~ \n 으뜬데!! \n 에러 때문에 몇 번을 밤을 샜는지~ \n 그래두 뿌듯하다!! \n 하하,,  \n 아무튼 횰랭이 생일 정말 축하해!! \n 이제 3년 후반 거의 4년이 다 돼가는 시간을 만났넹 \n 탠니가 조금씩 바뀌려고 노력은 하는데 \n 여부 입장에선 내가 바뀌고 있는지 잘 모르겠다. \n 그래도 한달동안은 여보가 3가지 정도 내가 했으면 하는거라도 \n 꾸준히 해보려고 최선을 다하고 있어.. \n 근데 이거를 하다보니까 다른걸 까먹넹.. \n 그래도 괜찮.. \n 을리가 없지만 염치 없지만 그럴때면 조금 봐줘옹.. \n 하하핫... \n 여보도 바뀌려고 노력하는게 느껴지니까 \n 나도 내가 조금씩 노력한다는걸 여보한테 느껴지도록 하고 싶어! \n 더 노력해야겠지만 \n 그래도 지금 조금씩 여보한테 전달되는것 같아서 \n 뭔지 모르게 기분이 좋긴 좋넹 \n 여부도 좋아하니까 괜히 나도 좋다 하핫! \n 앞으로도 조금씩 바뀌어보도록 할게! \n 하나씩 나아가다보면 언젠간 괜찮아 지겠지!? \n 서로 으쌰으쌰!! 잘해보자구!! \n 생일 정말 축하하고 사랑해 횰랭아 ❤️`}</Text>
    </Section>
  )
}

const MessageIcon = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      data-name="Livello 1"
      id="Livello_1"
      viewBox="0 0 128 128"
    >
      <title />
      <path d="M116.73,31.83a3,3,0,0,0-4.2-.61L64.14,67.34a1,1,0,0,1-1.2,0L15.5,31.06a3,3,0,1,0-3.64,4.77L49.16,64.36,12.27,92.16A3,3,0,1,0,15.88,97L54.11,68.14l5.18,4a7,7,0,0,0,8.43.06l5.44-4.06L111.84,97a3,3,0,1,0,3.59-4.81L78.17,64.35,116.12,36A3,3,0,0,0,116.73,31.83Z" />
      <path d="M113,19H15A15,15,0,0,0,0,34V94a15,15,0,0,0,15,15h98a15,15,0,0,0,15-15V34A15,15,0,0,0,113,19Zm9,75a9,9,0,0,1-9,9H15a9,9,0,0,1-9-9V34a9,9,0,0,1,9-9h98a9,9,0,0,1,9,9Z" />
    </svg>
  )
}
export default Invitation
