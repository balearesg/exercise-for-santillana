import React, { SelectHTMLAttributes } from "react";
import { Icon } from "pragmate-ui/icons";

type option = {
  label: string;
  value: any;
};

interface IProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: option[];
  firstOption?: string;
}
export /*bundle*/ function Select(props: IProps): JSX.Element {
  const { label, options, className, firstOption } = props;

  const output: JSX.Element[] = options.map(
    (item: option): JSX.Element => (
      <option key={item.value} value={item.value}>
        {item.label}
      </option>
    )
  );

  const badgeRequired = props.required && (<span className="input__required-label">(*)</span>)
  const cls: string = `${className ?? "form-group-select"}`;
  const properties = Object.assign({}, props);
  delete properties.className;
  delete properties.label;
  delete properties.options;
  delete properties.firstOption;

  return (
    <div className={cls}>
      <label className="label">{label}
        {badgeRequired}
      </label>
      <select
        className="select"
        title={label}
        {...properties}
        id={properties.name}
        value={properties.value ?? ""}
      >
        {firstOption !== null && <option value="">{firstOption ?? label}</option>}
        {output}
      </select>
      <Icon icon="down" />
    </div >
  );
}
