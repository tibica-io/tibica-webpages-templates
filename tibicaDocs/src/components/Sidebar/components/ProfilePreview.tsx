import styles from "./ProfilePreview.module.scss"
import { useNavigate } from "react-router-dom"
import { IconButton } from "@perfsys-io/uikit"
import personIcon from "../../../../../assets/images/person.png"


export interface IProfilePreviewProps {
    name: string;
    nickname: string;
    avatar?: any;
}


const ProfilePreview = ({ name, nickname, avatar = personIcon }: IProfilePreviewProps) => {
    const navigate = useNavigate()

    return (
        <div className={styles["profile"]}>
            <div className={styles["profile__icon"]}>
                <img src={avatar}
                    alt="avatar"
                    onError={(e: any) => {
                        e.target.onerror = null
                        e.currentTarget.src = personIcon
                    }}
                />
            </div>

            <div className={styles["profile__text"]}>
                <p className={styles["profile__title"]}>{name}</p>
                <p className={styles["profile__description"]}>{nickname}</p>
            </div>

            <IconButton icon="logout"
                className={styles["profile__button"]}
                onClick={() => navigate("/")}
            />
        </div>
    )
}

export default ProfilePreview
