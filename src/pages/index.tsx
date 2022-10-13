import './index.less';
import AvatarCropper from '@/components/AvatarCropper';

export default function IndexPage() {
  return (
    <div className="indexPage">
      <h1 className="title">组件列表</h1>
      <div className="item">
        <div className="item-titles">一、头像图片裁剪</div>
        <AvatarCropper />
      </div>
    </div>
  );
}
