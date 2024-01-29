import { AriaGuidanceProps, AriaOnChangeProps, AriaOnFilterProps, AriaOnFocusProps, GroupBase, OptionsOrGroups } from "react-select";

export const germanScreenReaderStatus = ({ count }) => `${count} Ergebnis${count !== 1 ? 'sse' : ''} gefunden`;

export const germanAriaLiveMessages = {
    guidance: (props: AriaGuidanceProps) => {
        const { isSearchable, isMulti, tabSelectsValue, context, isInitialFocus } =
            props;
        switch (context) {
            case 'menu':
                return `Verwenden Sie die Tasten Auf und Ab, um Optionen auszuwählen, drücken Sie die Eingabetaste, um die aktuell fokussierte Option auszuwählen, drücken Sie die Escape-Taste, um das Menü zu verlassen,${tabSelectsValue
                        ? ', drücken Sie Tab, um die Option auszuwählen und das Menü zu verlassen'
                        : ''
                    }.`;
            case 'input':
                return isInitialFocus
                    ? `${props['aria-label'] || 'Auswahlfeld'} wird fokussiert ${isSearchable ? ',tippe, um Liste zu verfeinern' : ''
                    }, drücken Sie die Taste Nach unten, um das Menü zu öffnen, ${isMulti ? ' Drücken Sie nach links, um ausgewählte Werte zu fokussieren.' : ''
                    }`
                    : '';
            case 'value':
                return 'Verwenden Sie die Links- und Rechtstaste, um zwischen den fokussierten Werten zu wechseln, drücken Sie die Rücktaste, um den aktuell fokussierten Wert zu entfernen.';
            default:
                return '';
        }
    },

    onChange: <Option, IsMulti extends boolean>(
        props: AriaOnChangeProps<Option, IsMulti>
    ) => {
        const { action, label = '', labels, isDisabled } = props;
        switch (action) {
            case 'deselect-option':
            case 'pop-value':
            case 'remove-value':
                return `Option ${label}, entfernt.`;
            case 'clear':
                return 'Alle ausgewählten Optionen wurden entfernt.';
            case 'initial-input-focus':
                return `Option${labels.length > 1 ? 'en' : ''} ${labels.join(
                    ','
                )}, ausgewählt.`;
            case 'select-option':
                return isDisabled
                    ? `Option ${label} ist deaktiviert. Wählen Sie eine andere Option.`
                    : `Option ${label}, ausgewählt.`;
            default:
                return '';
        }
    },

    onFocus: <Option, Group extends GroupBase<Option>>(
        props: AriaOnFocusProps<Option, Group>
    ) => {
        const {
            context,
            focused,
            options,
            label = '',
            selectValue,
            isDisabled,
            isSelected,
            isAppleDevice,
        } = props;

        const getArrayIndex = (arr: OptionsOrGroups<Option, Group>, item: Option) =>
            arr && arr.length ? `${arr.indexOf(item) + 1} of ${arr.length}` : '';

        if (context === 'value' && selectValue) {
            return `Wert ${label} fokussiert, ${getArrayIndex(selectValue, focused)}.`;
        }

        if (context === 'menu' && isAppleDevice) {
            const disabled = isDisabled ? ' deaktiviert' : '';
            const status = `${isSelected ? ' ausgewählt' : ''}${disabled}`;
            return `${label}${status}, ${getArrayIndex(options, focused)}.`;
        }
        return '';
    },

    onFilter: (props: AriaOnFilterProps) => {
        const { inputValue, resultsMessage } = props;
        return `${resultsMessage}${inputValue ? ' für Suchbegriff ' + inputValue : ''
            }.`;
    },
};