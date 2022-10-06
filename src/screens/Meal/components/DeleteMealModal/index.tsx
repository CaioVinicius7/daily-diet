import { Button } from "@components/Button";
import { Modal } from "react-native";
import { ModalContainer, ModalContent, ModalText } from "./styles";

interface DeleteMealModalProps {
  isVisible: boolean;
  handleChangeModalVisibility: () => void;
}

export function DeleteMealModal({
  isVisible,
  handleChangeModalVisibility
}: DeleteMealModalProps) {
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={isVisible}
      onRequestClose={handleChangeModalVisibility}
    >
      <ModalContainer>
        <ModalContent>
          <ModalText>
            Deseja realmente excluir o registro da refeição?
          </ModalText>

          <Button
            text="Cancelar"
            marginTop="10px"
            variant="SECONDARY"
            onPress={handleChangeModalVisibility}
            style={{
              width: "47.5%"
            }}
          />

          <Button
            text="Sim, excluir"
            marginTop="10px"
            style={{
              width: "47.5%"
            }}
          />
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}
